package com.innova.controller;

import com.innova.constants.ErrorCodes;
import com.innova.dto.request.ContentForm;
import com.innova.dto.request.TopicForm;
import com.innova.dto.response.SuccessResponse;
import com.innova.exception.BadRequestException;
import com.innova.model.Content;
import com.innova.model.Topic;
import com.innova.model.User;
import com.innova.repository.ContentRepository;
import com.innova.repository.TopicRepository;
import com.innova.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;

@RestController
@RequestMapping("api/entry")
public class EntryController {

    @Autowired
    UserServiceImpl userServiceImpl;

    @Autowired
    TopicRepository topicRepository;

    @Autowired
    ContentRepository contentRepository;

    @PostMapping("/addTopic")
    public ResponseEntity<?> addEntry(@Valid @RequestBody TopicForm topicForm) {
        if (topicRepository.existsByTopicName(topicForm.getTopicName())) {
            throw new BadRequestException("Topic Name is already used!", ErrorCodes.TOPIC_ALREADY_USED);
        }
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        Date date = new Date();
        Topic topic = new Topic(topicForm.getTopicName(), 0, user, date);
        topicRepository.save(topic);

        SuccessResponse response = new SuccessResponse(HttpStatus.OK, "New Topic added successfully.");
        return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
    }

    @GetMapping("/getTopics")
    public ResponseEntity<?> getTopic() {
        return ResponseEntity.ok().body(topicRepository.findAllByOrderByCreateDateDesc());
    }

    @PostMapping("/addContent")
    public ResponseEntity<?> addContent(@Valid @RequestBody ContentForm contentForm) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        Date date = new Date();
        if (!topicRepository.existsByTopicName(contentForm.getTopicName())) {
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        }
        else {
            Topic topic = topicRepository.findByTopicName(contentForm.getTopicName());
            Content content = new Content(contentForm.getContent(), 0, 0, 0, 0, date, user, topic);
            topic.setContentNumber(topic.getContentNumber() + 1);
            topic.addCloud_content(content);
            contentRepository.save(content);

            SuccessResponse response = new SuccessResponse(HttpStatus.OK, "New content added successfully.");
            return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
        }
    }

    @GetMapping("/getContent")
    public ResponseEntity<?> getTopic(@RequestParam("topic") String topicName) {
        if (topicRepository.existsByTopicName(topicName)) {
            Topic topic = topicRepository.findByTopicName(topicName);
            return ResponseEntity.ok().body(topic.getCloud_content());
        }
        else{
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        }
    }

}
