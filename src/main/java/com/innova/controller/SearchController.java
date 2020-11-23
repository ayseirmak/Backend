package com.innova.controller;

import com.innova.constants.ErrorCodes;
import com.innova.dto.response.SuccessResponse;
import com.innova.exception.BadRequestException;
import com.innova.model.Topic;
import com.innova.model.User;
import com.innova.repository.TopicRepository;
import com.innova.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/search")
public class SearchController {

    @Autowired
    TopicRepository topicRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/user")
    public ResponseEntity<?> searchForUsers(@RequestParam("username") String username) {
        if(userRepository.existsByUsername(username)) {
            SuccessResponse response = new SuccessResponse(HttpStatus.OK, "This username used.");
            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));

            return ResponseEntity.ok().body(user.getUsername());
        }
        else
            throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
    }
    @GetMapping("/topic")
    public ResponseEntity<?> searchForTopics(@RequestParam("topicName") String topicName) {
        if(topicRepository.existsByTopicName(topicName)) {
            Topic topic = topicRepository.findByTopicName(topicName)
                    .orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));

            return ResponseEntity.ok().body(topic.getTopicName());
        }
        else
            throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
    }
}
