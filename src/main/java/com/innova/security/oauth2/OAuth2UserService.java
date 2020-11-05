package com.innova.security.oauth2;

import com.innova.model.Role;
import com.innova.model.Roles;
import com.innova.model.User;
import com.innova.repository.RoleRepository;
import com.innova.repository.UserRepository;
import com.innova.security.services.UserDetailImpl;
import com.innova.security.oauth2.user.OAuth2UserInfo;
import com.innova.security.oauth2.user.OAuth2UserInfoFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.HashSet;
import java.util.Set;


@Service
public
class OAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

        try {
            return processOAuth2User(oAuth2UserRequest, oAuth2User);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User) {
        OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(oAuth2UserRequest.getClientRegistration().getRegistrationId(), oAuth2User.getAttributes());
        if (StringUtils.isEmpty(oAuth2UserInfo.getEmail())) {
            throw new RuntimeException("Email not found from OAuth2 provider");
        }
        User user;
        if (userRepository.existsByEmail(oAuth2UserInfo.getEmail())) {
            user = userRepository.findByEmail(oAuth2UserInfo.getEmail()).orElseThrow(() -> new RuntimeException("Fail! -> Cause: User with given email could not be found!"));
        } else {
            user = registerNewUser(oAuth2UserRequest, oAuth2UserInfo);
        }
        return UserDetailImpl.build(user, oAuth2User.getAttributes());
    }

    private User registerNewUser(OAuth2UserRequest oAuth2UserRequest, OAuth2UserInfo oAuth2UserInfo) {
        User user = new User();

        Set<Role> roles = new HashSet<>();

        Role userRole = roleRepository.findByRole(Roles.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
        roles.add(userRole);
        user.setRoles(roles);

        user.setUsername(oAuth2UserInfo.getId());
        user.setName(oAuth2UserInfo.getFirstName());
        user.setLastname(oAuth2UserInfo.getLastName());
        user.setEmail(oAuth2UserInfo.getEmail());
        user.setEnabled(true);
        return userRepository.save(user);
    }
}