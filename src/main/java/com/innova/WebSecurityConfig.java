package com.innova;


import com.innova.security.jwt.JwtAuthEntryPoint;
import com.innova.security.jwt.JwtAuthTokenFilter;
import com.innova.security.oauth2.HttpCookieOAuth2AuthorizationRequestRepository;
import com.innova.security.oauth2.OAuth2AuthenticationFailureHandler;
import com.innova.security.oauth2.OAuth2AuthenticationSuccessHandler;
import com.innova.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.innova.security.oauth2.OAuth2UserService;

/*
 * Without writing this class
 * @EnableWebSecurity is used to enable web security in a project.
 * @EnableGlobalMethodSecurity(prePostEnabled = true) is used to enable Spring Security global method security.
 */
@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtAuthEntryPoint unauthorizedHandler;

    @Autowired
    private OAuth2UserService oAuth2UserService;

    @Autowired
    private OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;

    @Autowired
    private OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;

    @Bean
    public JwtAuthTokenFilter authenticationJwtTokenFilter() {
        return new JwtAuthTokenFilter();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService((userDetailsService)).passwordEncoder(passwordEncoder());
        //http.csrf().disable();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
                .and()
                .authorizeRequests()
                .antMatchers(
                        "/",
                        "/error",
                        "/favicon.ico",
                        "/**/*.css",
                        "/**/*.js",
                        "/**/*.html",
                        "/**/*.jpg").permitAll()
                .antMatchers(
                        "/api/auth/**/",
                        "/oauth2/**")
                .permitAll()
                .antMatchers(
                        "/api/entry/getTopics",
                        "/api/entry/getContent",
                        "/api/entry/getUserContents",
                        "/api/entry/getLikes"

                )
                .permitAll()
                .antMatchers(
                        "/api/user/create-new-password/**",
                        "/api/user/info/**"
                )
                .permitAll()
                .anyRequest().authenticated()
                .and()
                .oauth2Login()
                .authorizationEndpoint()
                .baseUri("/oauth2/authorize")
                .authorizationRequestRepository(cookieAuthorizationRequestRepository())
                .and()
                .redirectionEndpoint()
                .baseUri("/oauth2/callback/*")
                .and()
                .userInfoEndpoint()
                .userService(oAuth2UserService)
                .and()
                .successHandler(oAuth2AuthenticationSuccessHandler)
                .failureHandler(oAuth2AuthenticationFailureHandler);

        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public HttpCookieOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository() {
        return new HttpCookieOAuth2AuthorizationRequestRepository();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}