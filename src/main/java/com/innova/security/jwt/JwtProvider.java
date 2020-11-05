package com.innova.security.jwt;

import com.innova.exception.AccessTokenExpiredException;
import com.innova.model.User;
import com.innova.repository.TokenBlacklistRepository;
import com.innova.security.services.UserDetailImpl;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;


import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtProvider {

    private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    @Autowired
    TokenBlacklistRepository tokenBlacklistRepository;

    @Value("${innova.app.jwtSecretForAccessToken}")
    private String jwtSecretForAccessToken;
    @Value("${innova.app.jwtAccessTokenExpiration}")
    private String jwtAccessTokenExpiration;

    @Value("${innova.app.jwtSecretForRefreshToken}")
    private String jwtSecretForRefreshToken;
    @Value("${innova.app.jwtRefreshTokenExpiration}")
    private String jwtRefreshTokenExpiration;

    @Value("${innova.app.jwtSecretForVerification}")
    private String jtwSecretForVerification;
    @Value("${innova.app.jwtVerificationTokenExpiration}")
    private String jwtVerificationTokenExpiration;

    @Value("${innova.app.jtwSecretForPassword}")
    private String jtwSecretForPassword;
    @Value("${innova.app.jwtPasswordTokenExpiration}")
    private String jwtPasswordTokenExpiration;


    public JwtProvider() {
    }

    public String generateJwtTokenForVerification(User user) {
        return Jwts.builder()
                .setSubject((user.getEmail()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + Long.parseLong(jwtVerificationTokenExpiration)))
                .signWith(SignatureAlgorithm.HS512, jtwSecretForVerification)
                .compact();
    }

    public String generateJwtTokenForPassword(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + Long.parseLong(jwtPasswordTokenExpiration)))
                .signWith(SignatureAlgorithm.HS512, jtwSecretForPassword)
                .compact();
    }

    public String generateRefreshToken(Authentication authentication, boolean rememberMe) {
        UserDetailImpl userPrincipal = (UserDetailImpl) authentication.getPrincipal();
        if (rememberMe) {
            this.jwtRefreshTokenExpiration = "31104000000"; //1 year
        }
        return Jwts.builder()
                .setSubject((userPrincipal.getEmail()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + Long.parseLong(jwtRefreshTokenExpiration)))
                .signWith(SignatureAlgorithm.HS512, jwtSecretForRefreshToken)
                .compact();
    }

    public String generateJwtToken(UserDetailImpl userPrincipal) {
        Map<String, Object> claims = new HashMap<>();


        return Jwts.builder()
                .setSubject(userPrincipal.getEmail())
                .signWith(SignatureAlgorithm.HS512, jwtSecretForAccessToken)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + Long.parseLong(jwtAccessTokenExpiration)))
                .compact();
    }

    public String getSubjectFromJwt(String token, String matter) {
        String secret = getSecret(matter);
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody().getSubject();

    }

    public Date getExpiredDateFromJwt(String token, String matter) {
        String secret = getSecret(matter);
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody().getExpiration();
    }

    public Date getIssueDateFromJwt(String token, String matter) {
        String secret = getSecret(matter);
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody().getIssuedAt();
    }

    public boolean validateJwtToken(String authToken, String matter, HttpServletRequest request) throws AccessTokenExpiredException {
        String secret = getSecret(matter);
        try {
            if (!matter.equals("verification") && checkExistence(authToken)) {
                return false;
            }
            Jwts.parser().setSigningKey(secret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature -> Message: {} ", e);
        } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token -> Message: {}", e);
        } catch (ExpiredJwtException e) {
            request.setAttribute("expired", e.getMessage());
            logger.error("Expired JWT token -> Message: {}");
        } catch (UnsupportedJwtException e) {
            logger.error("Unsupported JWT token -> Message: {}", e);
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty -> Message: {}", e);
        }
        return false;
    }

    private boolean checkExistence(String token) {
        return tokenBlacklistRepository.existsByToken(token);
    }

    private String getSecret(String matter) {
        switch (matter) {
            case "verification":
                return jtwSecretForVerification;
            case "authorize":
                return jwtSecretForAccessToken;
            case "refresh":
                return jwtSecretForRefreshToken;
            case "password":
                return jtwSecretForPassword;
            default:
                return null;
        }
    }
}