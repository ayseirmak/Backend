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


    public JwtProvider(){}

    public String generateJwtTokenForVerification(User user){
        return Jwts.builder()
                .setSubject((user.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + Integer.parseInt(jwtVerificationTokenExpiration)))
                .signWith(SignatureAlgorithm.HS512, jtwSecretForVerification)
                .compact();
    }

    public String generateRefreshToken(Authentication authentication) {
        UserDetailImpl userPrincipal = (UserDetailImpl) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject((userPrincipal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + Long.parseLong(jwtRefreshTokenExpiration)))
                .signWith(SignatureAlgorithm.HS512, jwtSecretForRefreshToken)
                .compact();
    }

    public String generateJwtToken(Authentication authentication) {
        Map<String, Object> claims = new HashMap<>();
        UserDetailImpl userPrincipal = (UserDetailImpl) authentication.getPrincipal();
        System.out.println(userPrincipal.getUsername());
//        TODO correct user detail impl
//        claims.put("id", userPrincipal.getId());
        claims.put("authorities", userPrincipal.getAuthorities());
        claims.put("name", userPrincipal.getName());
        claims.put("username", userPrincipal.getUsername());
        claims.put("email", userPrincipal.getEmail());

        return Jwts.builder()
                .setSubject((userPrincipal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + Integer.parseInt(jwtAccessTokenExpiration)))
                .setId(userPrincipal.getId().toString())
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, jwtSecretForAccessToken)
                .compact();
    }

    public String getUserNameFromJwtToken(String token, String matter) {
        String secret = getSecret(matter);
        return  (String) Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody().get("username");
    }

    public String getEmailFromJwtToken(String token, String matter) {
        String secret = getSecret(matter);
        return  (String) Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody().get("email");
    }

    public boolean validateJwtToken(String authToken, String matter) {
        String secret = getSecret(matter);
        try {
            if(!matter.equals("verification") && checkExistence(authToken)){
                return false;
            }
            Jwts.parser().setSigningKey(secret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature -> Message: {} ", e);
        } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token -> Message: {}", e);
        } catch (ExpiredJwtException e) {
            throw new AccessTokenExpiredException("Expired JWT token.");
        } catch (UnsupportedJwtException e) {
            logger.error("Unsupported JWT token -> Message: {}", e);
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty -> Message: {}", e);
        }
        return false;
    }

    private boolean checkExistence(String token){
        return tokenBlacklistRepository.existsByToken(token);
    }

    private String getSecret(String matter){
        switch (matter){
            case "verification":
                return jtwSecretForVerification;
            case "authorize":
                return jwtSecretForAccessToken;
            case "refresh":
                return jwtSecretForRefreshToken;
            default:
                return null;
        }
    }
}