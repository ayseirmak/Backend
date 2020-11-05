package com.innova.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "token_blacklist", schema = "public")
public class TokenBlacklist {
    @Id
    @Column(name = "token")
    private String token;

    @Column(name = "type")
    @NotNull
    private String type;

    public TokenBlacklist(){}

    public TokenBlacklist(String token, String type){
        this.token = token;
        this.type = type;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}