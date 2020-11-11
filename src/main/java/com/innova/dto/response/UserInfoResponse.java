package com.innova.dto.response;

public class UserInfoResponse {

    private String username;
    private String name;
    private String lastName;
    private String age;

    public UserInfoResponse(String username, String name, String lastName, String age) {
        this.username = username;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    public UserInfoResponse() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }
}