package com.innova.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "content_dislike", schema = "public")
public class ContentDislike {

    @EmbeddedId
    ContentDislikeKey id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties(value = {"id", "age", "name", "lastname", "activeSessions", "email", "password", "roles", "content", "contentLike", "contentDislike","enabled","phoneNumber"})
    User user;

    @ManyToOne
    @MapsId("contentId")
    @JoinColumn(name = "content_id")
    @JsonIgnoreProperties(value = {"id", "like", "dislike", "dailyLike", "dailyDislike"})
    Content content;

    @Column(name = "dislike_date")
    private LocalDateTime likeDate;

    public ContentDislike() {

    }

    public ContentDislike( User user, Content content) {
        this.id = new ContentDislikeKey(user.getId(),content.getId());
        this.user = user;
        this.content = content;
        this.likeDate = LocalDateTime.now();
    }

    public ContentDislikeKey getId() {
        return id;
    }

    public void setId(ContentDislikeKey id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Content getContent() {
        return content;
    }

    public void setContent(Content content) {
        this.content = content;
    }

    public LocalDateTime getLikeDate() {
        return likeDate;
    }

    public void setLikeDate(LocalDateTime likeDate) {
        this.likeDate = likeDate;
    }
}
