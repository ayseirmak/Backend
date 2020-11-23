package com.innova.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "topic", schema = "public",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"topic_name"})})


public class Topic {

    @NotBlank
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "topic_seq")
    @SequenceGenerator(name = "topic_seq", sequenceName = "topic_seq", initialValue = 1, allocationSize = 1)
    private Integer id;

    @Size(min = 3, max = 50)
    @Column(name = "topic_name")
    @NotBlank
    private String topicName;

    @Column(name = "number_of_content")
    private int contentNumber;

    @Column(name = "create_date")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties(value = {"id","enabled","phoneNumber","age","name","lastname","activeSessions","email","password","roles","content","contentLike","contentDislike"})
    private User user;

    @OneToMany(mappedBy = "topic")
    @JsonManagedReference
    private Set<Content> cloud_content = new HashSet<>();;

    public Topic(String topicName, int contentNumber, User user, Date createDate) {
        this.topicName = topicName;
        this.contentNumber = contentNumber;
        this.user = user;
        this.createDate = createDate;
    }


    public Topic() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public int getContentNumber() {
        return contentNumber;
    }

    public void setContentNumber(int contentNumber) {
        this.contentNumber = contentNumber;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public void addCloud_content(Content content){
        cloud_content.add(content);
    }

    public void removeCloud_content(Content content){
        cloud_content.remove(content);
    }


    public Set<Content> getCloud_content(){
        return this.cloud_content;
    }

    public void setCloud_content(Set<Content> content){
        this.cloud_content = content;
    }

    @Override
    public String toString() {
        return "Topic{" +
                "id=" + id +
                ", topicName='" + topicName + '\'' +
                ", contentNumber=" + contentNumber +
                ", user=" + user +
                ", createDate=" + createDate +
                '}';
    }
}
