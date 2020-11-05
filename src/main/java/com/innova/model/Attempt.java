package com.innova.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_attempt", schema = "public")
public class Attempt {
    @Id
    @Column(name = "ip")
    private String ip;

    @Column(name = "attempt_counter")
    private int attemptCounter;

    @Column(name = "first_attempt_date", columnDefinition = "timestamp without time zone not null")
    @NotNull
    private LocalDateTime first_attempt_date;

    public Attempt(){}

    public Attempt(String ip, int attemptCounter, @NotNull LocalDateTime first_attempt_date) {
        this.ip = ip;
        this.attemptCounter = attemptCounter;
        this.first_attempt_date = first_attempt_date;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public int getAttemptCounter() {
        return attemptCounter;
    }

    public void setAttemptCounter(int attemptCounter) {
        this.attemptCounter = attemptCounter;
    }

    public LocalDateTime getAttemptDate() {
        return first_attempt_date;
    }

    public void setFirst_attempt_date(LocalDateTime first_attempt_date) {
        this.first_attempt_date = first_attempt_date;
    }

    public LocalDateTime getFirst_attempt_date() {
        return first_attempt_date;
    }

    @Override
    public String toString() {
        return "Attempt{" +
                "ip='" + ip + '\'' +
                ", attemptCounter=" + attemptCounter +
                '}';
    }
}
