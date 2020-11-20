package com.innova.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class ContentLikeKey implements Serializable {

    @Column(name = "user_id")
     Integer userId;

    @Column(name = "content_id")
     Integer contentId;

    public ContentLikeKey() {
    }

    public ContentLikeKey(Integer userId, Integer contentId) {
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
