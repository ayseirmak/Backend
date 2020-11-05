package com.innova.event;

import org.springframework.context.ApplicationEvent;

public class OnPasswordForgotEvent extends ApplicationEvent {
    private static final long serialVersionUID = 1L;

    private String email;

    public OnPasswordForgotEvent(String email) {
        super(email);
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
