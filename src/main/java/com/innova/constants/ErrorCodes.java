package com.innova.constants;

public enum ErrorCodes {
    USERNAME_AND_PASSWORD(100),
    USERNAME_ALREADY_TAKEN(101),
    EMAIL_ALREADY_TAKEN(102),
    PASSWORD_NOT_VALID(103),
    TOKEN_CANNOT_BE_EMPTY(104),
    NO_SUCH_USER(105),
    REQUIRE_BOTH_TOKENS(106),
    REQUIRE_ALL_FIELDS(107),
    OLD_PASSWORD_DOES_NOT_MATCH(108),
    NEW_PASSWORD_DOES_NOT_MATCH(109),
    TOPIC_ALREADY_USED(110),
    TOPIC_NOT_VALID(111),
    ACCOUNT_NOT_ACTIVATED(200),
    INVALID_REFRESH_TOKEN(201),
    INVALID_ACCESS_TOKEN(202),
    SOMETHING_IS_WRONG(300);

    private int value;

    private ErrorCodes(int value){
        this.value = value;
    }

    public int getValue(){
        return value;
    }
}
