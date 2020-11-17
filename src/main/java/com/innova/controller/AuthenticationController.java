package com.innova.controller;

import com.innova.aspect.RequiresCaptcha;
import com.innova.constants.ErrorCodes;
import com.innova.dto.request.ForgotPasswordForm;
import com.innova.dto.request.LoginForm;
import com.innova.dto.request.SignUpForm;
import com.innova.dto.response.LoginResponse;
import com.innova.dto.response.SuccessResponse;
import com.innova.event.OnPasswordForgotEvent;
import com.innova.event.OnRegistrationSuccessEvent;
import com.innova.exception.AccountNotActivatedException;
import com.innova.exception.BadRequestException;
import com.innova.exception.ErrorWhileSendingEmailException;
import com.innova.exception.UnauthorizedException;
import com.innova.model.ActiveSessions;
import com.innova.model.Attempt;
import com.innova.model.Role;
import com.innova.model.Roles;
import com.innova.model.User;
import com.innova.repository.ActiveSessionsRepository;
import com.innova.repository.AttemptRepository;
import com.innova.repository.RoleRepository;
import com.innova.repository.UserRepository;
import com.innova.security.jwt.JwtProvider;

import com.innova.security.services.UserDetailImpl;
import com.innova.util.PasswordUtil;

import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/auth")
public class AuthenticationController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AttemptRepository attemptRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    ActiveSessionsRepository activeSessionsRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    private ApplicationEventPublisher eventPublisher;

    @PostMapping("signin")
    @RequiresCaptcha
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginForm, HttpServletRequest request)
            throws IOException, AccountNotActivatedException {

        if (loginForm.getPassword() == null || loginForm.getUsername() == null) {
            throw new BadRequestException("Username and password should be provided",
                    ErrorCodes.USERNAME_AND_PASSWORD);
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginForm.getUsername(), loginForm.getPassword()));

        User user = userRepository.findByUsername(loginForm.getUsername())
                .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));

        if (!user.isEnabled()) {
            throw new AccountNotActivatedException("Account has not been activated.");
        }

        UserDetailImpl userPrincipal = UserDetailImpl.build(user);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String accessToken = jwtProvider.generateJwtToken(userPrincipal);
        String refreshToken = jwtProvider.generateRefreshToken(authentication, loginForm.isRememberMe());
        UserDetailImpl userDetails = (UserDetailImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
                .collect(Collectors.toList());

        if (attemptRepository.existsByIp(request.getRemoteAddr())) {
            Attempt attempt = attemptRepository.findById(request.getRemoteAddr()).get();
            attempt.setAttemptCounter(0);
            attemptRepository.save(attempt);
        }

        String userAgent = request.getHeader("User-Agent") == null ? "Not known" : request.getHeader("User-Agent");
        ActiveSessions activeSession = new ActiveSessions(refreshToken, accessToken, userAgent,
                LocalDateTime.ofInstant(jwtProvider.getExpiredDateFromJwt(refreshToken, "refresh").toInstant(),
                        ZoneId.systemDefault()),
                LocalDateTime.ofInstant(jwtProvider.getIssueDateFromJwt(refreshToken, "refresh").toInstant(),
                        ZoneId.systemDefault()));

        activeSession.setUser(user);
        activeSessionsRepository.save(activeSession);

        user.addActiveSession(activeSession);
        userRepository.save(user);
        return ResponseEntity
                .ok(new LoginResponse(accessToken, refreshToken, userDetails.getId(), userDetails.getUsername(),
                        userDetails.getEmail(), roles, userDetails.getName(), userDetails.getLastName()));
    }

    @PostMapping("sign-up")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpForm) {
        if (userRepository.existsByUsername(signUpForm.getUsername())) {
            throw new BadRequestException("Username is already taken!", ErrorCodes.USERNAME_ALREADY_TAKEN);
        }
        if (userRepository.existsByEmail(signUpForm.getEmail())) {
            throw new BadRequestException("Email is already in use!", ErrorCodes.EMAIL_ALREADY_TAKEN);
        }

        if (!PasswordUtil.isValidPassword(signUpForm.getPassword())) {
            throw new BadRequestException("Password is not valid", ErrorCodes.PASSWORD_NOT_VALID);
        }

        User user = new User(signUpForm.getUsername(), signUpForm.getEmail(),
                passwordEncoder.encode(signUpForm.getPassword()));
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByRole(Roles.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
        roles.add(userRole);
        user.setRoles(roles);
        userRepository.save(user);

        try {
            eventPublisher.publishEvent(new OnRegistrationSuccessEvent(user, "/api/auth"));
        } catch (Exception re) {
            throw new ErrorWhileSendingEmailException(re.getMessage());
        }
        SuccessResponse response = new SuccessResponse(HttpStatus.CREATED, "User registered successfully");
        return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
    }

    @GetMapping("/confirmRegistration")
    public ResponseEntity<?> confirmRegistration(@RequestParam("token") String token, HttpServletRequest request)
            throws URISyntaxException {
        if (token == null) {
            return ResponseEntity.status(HttpStatus.SEE_OTHER).location(URI.create("https://tatli-sozluk.herokuapp.com")).build();
        }

        if (token != null && jwtProvider.validateJwtToken(token, "verification", request)) {
            String username = jwtProvider.getSubjectFromJwt(token, "verification");
            User user = userRepository.findByEmail(username)
                    .orElseThrow(() -> new BadRequestException("User with given email could not found", ErrorCodes.NO_SUCH_USER));
            user.setEnabled(true);
            userRepository.save(user);

            return ResponseEntity.status(HttpStatus.SEE_OTHER).location(URI.create("https://tatli-sozluk.herokuapp.com/mailsuccess"))
                    .build();
        } else {
            return ResponseEntity.status(HttpStatus.SEE_OTHER).location(URI.create("https://tatli-sozluk.herokuapp.com/mailerror"))
                    .build();
        }
    }

    @GetMapping("/refresh-token")
    public ResponseEntity<?> getAccessToken(@RequestParam("token") String token, HttpServletRequest request) {
        if (token == null) {
            throw new BadRequestException("Token cannot be empty", ErrorCodes.TOKEN_CANNOT_BE_EMPTY);
        }
        try {
            String email = jwtProvider.getSubjectFromJwt(token, "refresh");
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new BadRequestException("User with given email could not found", ErrorCodes.NO_SUCH_USER));
            if (!user.isEnabled()) {
                throw new AccountNotActivatedException("Account has not been activated.");
            }
            UserDetailImpl userPrincipal = UserDetailImpl.build(user);
            if (jwtProvider.validateJwtToken(token, "refresh", request)) {
                Map<String, Object> response = new HashMap<>();
                String newAccessToken = jwtProvider.generateJwtToken(userPrincipal);
                ActiveSessions currentSession = activeSessionsRepository.getOne(token);
                currentSession.getAccessToken(newAccessToken);
                activeSessionsRepository.save(currentSession);
                response.put("accessToken", newAccessToken);
                return ResponseEntity.ok(response);
            } else {
                throw new UnauthorizedException("Invalid refresh token", ErrorCodes.INVALID_REFRESH_TOKEN);
            }
        } catch (ExpiredJwtException e) {
            throw new UnauthorizedException("Invalid refresh token", ErrorCodes.INVALID_REFRESH_TOKEN);
        }

    }

    @PostMapping("forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordForm forgotPasswordForm) {
        String email = forgotPasswordForm.getEmail();
        if (!userRepository.existsByEmail(email)) {
            throw new BadRequestException("User with given email could not found", ErrorCodes.NO_SUCH_USER);
        } else {
            try {
                eventPublisher.publishEvent(new OnPasswordForgotEvent(email));
                SuccessResponse response = new SuccessResponse(HttpStatus.OK,"Email successfuly sent");
                return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
            } catch (Exception re) {
                throw new ErrorWhileSendingEmailException(re.getMessage());
            }
        }
    }

    @GetMapping("send-email")
    public ResponseEntity<?> sendNewEmail(@RequestParam("email") String email) {
        try {
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new BadRequestException("User with given email could not found", ErrorCodes.NO_SUCH_USER));
            eventPublisher.publishEvent(new OnRegistrationSuccessEvent(user, "/api/auth"));
            SuccessResponse response = new SuccessResponse(HttpStatus.OK,"Email successfuly sent");
            return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
        }catch (Exception re) {
            throw new ErrorWhileSendingEmailException(re.getMessage());
        }
    }
}