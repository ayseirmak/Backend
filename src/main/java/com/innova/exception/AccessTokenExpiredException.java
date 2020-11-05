package com.innova.exception;

public class AccessTokenExpiredException extends RuntimeException {
    public AccessTokenExpiredException(String explanation) {
        super(explanation);
    }
}
