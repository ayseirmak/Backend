package com.innova.dto.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LogoutForm {
    @NotBlank
    private String refreshToken;

    @NotBlank
    private String accessToken;

    public LogoutForm(){}

    public LogoutForm(String refreshToken, String accessToken){
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
