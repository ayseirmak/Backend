package com.innova.controller;

import com.innova.model.User;
import com.innova.repository.TopicRepository;
import com.innova.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/search")
public class SearchController {

    @Autowired
    TopicRepository topicRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/user")
    public ResponseEntity<?> searchForUsers(@RequestParam("username") String username) {
        List<String> userList = userRepository.findUserByUsernameLike(username);
        return ResponseEntity.ok().body(userList);
    }

    @GetMapping("/topic")
    public ResponseEntity<?> searchForTopics(@RequestParam("topicName") String topicName) {
        List<String> topicNameList = topicRepository.findTopicsWithPartOfName(topicName);
        return ResponseEntity.ok().body(topicNameList);
    }
}
