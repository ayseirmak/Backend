package com.innova.dto.request;

import java.util.Set;

import javax.validation.constraints.*;

public class ChangeForm {

    @NotBlank
    @Size(max = 60)
    @Email
    private String email;

    @Size(min = 3, max = 25)
    private String name;

    @Size(min = 3, max = 25)
    private String lastname;

    @Size(min = 1, max = 3)
    private String age;

    @Size(min = 10, max = 10)
    private String phoneNumber;

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}