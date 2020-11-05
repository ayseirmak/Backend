package com.innova.security.oauth2;

import com.innova.config.AppProperties;
import com.innova.constants.ErrorCodes;
import com.innova.exception.BadRequestException;
import com.innova.model.ActiveSessions;
import com.innova.model.User;
import com.innova.repository.ActiveSessionsRepository;
import com.innova.repository.UserRepository;
import com.innova.security.jwt.JwtProvider;
import com.innova.security.services.UserDetailImpl;
import com.innova.util.CookieUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Optional;

import static com.innova.security.oauth2.HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME;

@Component
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private JwtProvider tokenProvider;

    private HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;

    @Autowired
    private AppProperties appProperties;

    @Autowired
    ActiveSessionsRepository activeSessionsRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OAuth2AuthenticationSuccessHandler(JwtProvider tokenProvider,
                                       HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository) {
        this.tokenProvider = tokenProvider;
        this.httpCookieOAuth2AuthorizationRequestRepository = httpCookieOAuth2AuthorizationRequestRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        String targetUrl = determineTargetUrl(request, response, authentication);

        if (response.isCommitted()) {
            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }

        clearAuthenticationAttributes(request, response);
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }

    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        Optional<String> redirectUri = CookieUtils.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                .map(Cookie::getValue);


        if (redirectUri.isPresent() && !isAuthorizedRedirectUri(redirectUri.get())) {
            throw new BadRequestException("Unauthorized url", ErrorCodes.USERNAME_AND_PASSWORD);
        }

        UserDetailImpl userDetails = (UserDetailImpl) authentication.getPrincipal();

        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(() -> new RuntimeException("Fail! -> Cause: User cannot find"));
        String targetUrl = redirectUri.orElse(getDefaultTargetUrl());

        String refreshToken = tokenProvider.generateRefreshToken(authentication, false);
        String accessToken = tokenProvider.generateJwtToken((UserDetailImpl) authentication.getPrincipal());

        String userAgent = request.getHeader("User-Agent") == null ? "Not known" : request.getHeader("User-Agent");

        ActiveSessions activeSession = new ActiveSessions(
                refreshToken,
                accessToken,
                userAgent,
                LocalDateTime.ofInstant(tokenProvider.getExpiredDateFromJwt(refreshToken, "refresh").toInstant(), ZoneId.systemDefault()),
                LocalDateTime.ofInstant(tokenProvider.getIssueDateFromJwt(refreshToken, "refresh").toInstant(), ZoneId.systemDefault())
        );
        activeSession.setUser(user);
        activeSessionsRepository.save(activeSession);

        return UriComponentsBuilder.fromUriString(targetUrl)
                .queryParam("refreshToken", refreshToken)
                .queryParam("accessToken", accessToken)
                .build().toUriString();
    }

    protected void clearAuthenticationAttributes(HttpServletRequest request, HttpServletResponse response) {
        super.clearAuthenticationAttributes(request);
        httpCookieOAuth2AuthorizationRequestRepository.removeAuthorizationRequestCookies(request, response);
    }

    private boolean isAuthorizedRedirectUri(String uri) {
        URI clientRedirectUri = URI.create(uri);
        return appProperties.getOauth2().getAuthorizedRedirectUris()
                .stream()
                .anyMatch(authorizedRedirectUri -> {
                    URI authorizedURI = URI.create(authorizedRedirectUri);
                    if (authorizedURI.getHost().equalsIgnoreCase(clientRedirectUri.getHost())
                            && authorizedURI.getPort() == clientRedirectUri.getPort()) {
                        return true;
                    }
                    return false;
                });
    }
}