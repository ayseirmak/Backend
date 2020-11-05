package com.innova.exception;

import com.innova.constants.ErrorCodes;

public class UnauthorizedException extends RuntimeException{
    private int messageCode;

    public UnauthorizedException(String message, ErrorCodes messageCode) {
        super(message);
        this.messageCode = messageCode.getValue();
    }

    public int getmessageCode(){
        return this.messageCode;
    }
}
