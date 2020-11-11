package com.innova.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name = "cloud_content", schema = "public")
public class Content {

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
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "topic_id", nullable = false)
    @JsonIgnoreProperties(value = {"createDate","contentNumber","id","cloud_content"})
    private Topic topic;


    public Content() {

    }

    public Content(@NotBlank String content, int like, int dislike, int dailyLike, int dailyDislike, Date createDate, User user, Topic topic) {
        this.content = content;
        this.like = like;
        this.dislike = dislike;
        this.dailyLike = dailyLike;
        this.dailyDislike = dailyDislike;
        this.createDate = createDate;
        this.user = user;
        this.topic = topic;
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

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
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
}
