package com.innova.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class ContentDislikeKey implements Serializable {

    @Column(name = "user_id")
    Integer userId;

    @Column(name = "content_id")
    Integer contentId;

    public ContentDislikeKey() {
    }

    public ContentDislikeKey(Integer userId, Integer contentId) {
        this.userId = userId;
        this.contentId = contentId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getContentId() {
        return contentId;
    }

    public void setContentId(Integer contentId) {
        this.contentId = contentId;
    }

}
