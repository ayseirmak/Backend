package com.innova.exception;

public class AccountNotActivatedException extends RuntimeException {
    public AccountNotActivatedException(String explanation) {
        super(explanation);
    }
}
