package com.innova.dto.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


public class ContentForm {

    @NotBlank
    private String content;

    @NotBlank
    @Size(min=3, max = 50)
    private String topicName;

    public String getContent() {
        return content;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }
}

