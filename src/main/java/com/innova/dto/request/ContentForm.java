package com.innova.dto.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


public class ContentForm {

    @NotBlank
    private String content;

    @NotBlank
    private String topicId;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }
}

