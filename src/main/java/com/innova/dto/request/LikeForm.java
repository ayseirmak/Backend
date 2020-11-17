package com.innova.dto.request;

import javax.validation.constraints.NotBlank;

public class LikeForm {

    @NotBlank
    private String contentID;

    @NotBlank
    private String like;

    public String getContentID() {
        return contentID;
    }

    public void setContentID(String contentID) {
        this.contentID = contentID;
    }

    public String getLike() {
        return like;
    }

    public void setLike(String like) {
        this.like = like;
    }
}
