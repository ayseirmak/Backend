package com.innova.security.oauth2.user;

import java.util.Map;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase("google")) {
            return new GoogleOAuth2UserInfo(attributes);
        }
        else if (registrationId.equalsIgnoreCase("facebook")) {
            System.out.println("Facebook is not supported yet");
            return null;
        }
        else {
            throw new RuntimeException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}