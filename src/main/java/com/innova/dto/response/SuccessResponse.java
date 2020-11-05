package com.innova.dto.response;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;

public class SuccessResponse {
    private HttpStatus status;
    private String message;
    private Date timestamp;

    public SuccessResponse() {
        super();
    }

    public SuccessResponse(final HttpStatus status, final String message) {
        super();
        this.status = status;
        this.message = message;
        this.timestamp = new Date();
    }

    public SuccessResponse(final HttpStatus status, final int messageCode) {
        super();
        this.status = status;
        this.message = Integer.toString(messageCode);
        this.timestamp = new Date();
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(final Date timestamp) {
        this.timestamp = timestamp;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(final HttpStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(final String message) {
        this.message = message;
    }
}
