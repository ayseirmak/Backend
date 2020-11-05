package com.innova.service;

import com.innova.model.User;
import com.innova.security.services.UserDetailImpl;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;


public interface UserService {
    public User getUserWithAuthentication(Authentication authentication);
    public User editUser(User user, String name, String lastName, String age, String phoneNumber);
    public boolean existsByEmail(String email);
    public User changeEmail(User user, String email);
    public UserDetailImpl getUserDetails(Authentication authentication);
    public User setNewPassword(User user, String password);
    public User getUserByEmail(String email);
    public User getUserByToken(String token, String matter);
}
