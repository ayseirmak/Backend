package com.innova.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "cloud_content", schema = "public")
public class Content implements Comparable<Content> {

    @NotBlank
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cont_seq")
    @SequenceGenerator(name = "cont_seq", sequenceName = "cont_seq", initialValue = 1, allocationSize = 1)
    private Integer id;

    @Column(name = "content")
    @NotBlank
    private String content;

    @Column(name = "total_like")
    private int like;

    @Column(name = "total_dislike")
    private int dislike;

    @Column(name = "daily_like")
    private int dailyLike;

    @Column(name = "daily_dislike")
    private int dailyDislike;

    @Column(name = "create_date")
    private LocalDateTime createDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties(value = {"id", "enabled", "phoneNumber", "age", "name", "lastname", "activeSessions", "email", "password", "roles", "content", "contentLike", "contentDislike"})
    private User user;

    @ManyToOne
    @JoinColumn(name = "topic_id", nullable = false)
    @JsonIgnoreProperties(value = {"createDate", "contentNumber", "cloud_content"})
    private Topic topic;

    @OneToMany(mappedBy = "content")
    @JsonIgnoreProperties(value = {"id", "likeDate", "content"})
    private Set<ContentLike> userLike = new HashSet<ContentLike>();

    @OneToMany(mappedBy = "content")
    @JsonIgnoreProperties(value = {"id", "likeDate", "content"})
    private Set<ContentDislike> userDislike = new HashSet<ContentDislike>();


    public Content() {

    }

    public Content(@NotBlank String content, int like, int dislike, int dailyLike, int dailyDislike, LocalDateTime createDate, User user, Topic topic) {
        this.content = content;
        this.like = like;
        this.dislike = dislike;
        this.dailyLike = dailyLike;
        this.dailyDislike = dailyDislike;
        this.createDate = createDate;
        this.user = user;
        this.topic = topic;
    }

    public Set<ContentLike> getUserLike() {
        return userLike;
    }

    public void setUserLike(Set<ContentLike> userLike) {
        this.userLike = userLike;
    }

    public Set<ContentDislike> getUserDislike() {
        return userDislike;
    }

    public void setUserDislike(Set<ContentDislike> userDislike) {
        this.userDislike = userDislike;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getLike() {
        return like;
    }

    public void setLike(int like) {
        this.like = like;
    }

    public int getDislike() {
        return dislike;
    }

    public void setDislike(int dislike) {
        this.dislike = dislike;
    }

    public int getDailyLike() {
        return dailyLike;
    }

    public void setDailyLike(int dailyLike) {
        this.dailyLike = dailyLike;
    }

    public int getDailyDislike() {
        return dailyDislike;
    }

    public void setDailyDislike(int dailyDislike) {
        this.dailyDislike = dailyDislike;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    @Override
    public String toString() {
        return "Content{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", like=" + like +
                ", dislike=" + dislike +
                ", dailyLike=" + dailyLike +
                ", dailyDislike=" + dailyDislike +
                ", createDate=" + createDate +
                ", user=" + user +
                ", topic=" + topic +
                '}';
    }

    @Override
    public int compareTo(Content content) {
        if (this.dailyLike == content.getDailyLike())
            return 1;
        else if (this.dailyLike > content.getDailyLike())
            return 1;
        else
            return -1;
    }
}
