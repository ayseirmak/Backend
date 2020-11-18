package com.innova.controller;

import com.innova.constants.ErrorCodes;
import com.innova.dto.request.ContentForm;
import com.innova.dto.request.LikeForm;
import com.innova.dto.request.TopicForm;
import com.innova.dto.response.SuccessResponse;
import com.innova.exception.BadRequestException;
import com.innova.model.Content;
import com.innova.model.Topic;
import com.innova.model.User;
import com.innova.repository.ContentRepository;
import com.innova.repository.TopicRepository;
import com.innova.repository.UserRepository;
import com.innova.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.Set;
import java.util.TreeSet;

@RestController
@RequestMapping("api/entry")
public class EntryController {

    @Autowired
    UserServiceImpl userServiceImpl;

    @Autowired
    TopicRepository topicRepository;

    @Autowired
    ContentRepository contentRepository;

    @Autowired
    UserRepository userRepository;

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
        } else {
            Topic topic = topicRepository.findByTopicName(contentForm.getTopicName());
            Content content = new Content(contentForm.getContent(), 0, 0, 0, 0, date, user, topic);
            contentRepository.save(content);
            topic.setContentNumber(topic.getContentNumber() + 1);
            topic.addCloud_content(content);
            user.addContent(content);
            userRepository.save(user);
            SuccessResponse response = new SuccessResponse(HttpStatus.OK, "New content added successfully.");
            return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
        }
    }

    @GetMapping("/getContent")
    public ResponseEntity<?> getContent(@RequestParam("topic") String topicName) {
        if (topicRepository.existsByTopicName(topicName)) {
            Topic topic = topicRepository.findByTopicName(topicName);
            Set <Content> sortContent = new TreeSet<Content>().descendingSet();
            sortContent.addAll(topic.getCloud_content());
            return ResponseEntity.ok().body(sortContent);
        } else {
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        }
    }

    @GetMapping("/getMyContents")
    public ResponseEntity<?> getMyContents() {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        Set<Content> contentForUser = user.getContent();
        return ResponseEntity.ok().body(contentForUser);
    }

    @GetMapping("/getUserContents")
    public ResponseEntity<?> getUserContents(@RequestParam("userName") String userName) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));
        ;
        Set<Content> contentForUser = user.getContent();
        return ResponseEntity.ok().body(contentForUser);
    }

    @PutMapping("/like-dislike")
    public ResponseEntity<?> likeDislike(@Valid @RequestBody LikeForm likeForm) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        if (contentRepository.existsById(Integer.parseInt(likeForm.getContentID()))) {
            Content content = contentRepository.findById(Integer.parseInt(likeForm.getContentID()));
            if (!user.getContentLike().contains(content) && !user.getContentDislike().contains(content)) {
                if (likeForm.getLike().equals("like")) {
                    content.setLike(content.getLike() + 1);
                    content.setDailyLike(content.getDailyLike() + 1);
                    Set<User> userLike = content.getUserLike();
                    userLike.add(user);
                    content.setUserLike(userLike);
                    contentRepository.save(content);
                    Set<Content> contentLike = user.getContentLike();
                    contentLike.add(content);
                    user.setContentLike(contentLike);
                    userRepository.save(user);
                    SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully liked.");
                    return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
                } else if (likeForm.getLike().equals("dislike")) {
                    content.setDislike(content.getDislike() + 1);
                    content.setDailyDislike(content.getDailyDislike() + 1);
                    Set<User> userDislike = content.getUserDislike();
                    userDislike.add(user);
                    content.setUserDislike(userDislike);
                    contentRepository.save(content);
                    Set<Content> contentDislike = user.getContentDislike();
                    contentDislike.add(content);
                    user.setContentDislike(contentDislike);
                    userRepository.save(user);
                    SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully liked.");
                    return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
                } else {
                    throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
                }
            } else if (user.getContentLike().contains(content) && !user.getContentDislike().contains(content) && likeForm.getLike().equals("cancel-like")) {
                content.setLike(content.getLike() - 1);
                content.setDailyLike(content.getDailyLike() - 1);
                Set<User> userLike = content.getUserLike();
                userLike.remove(user);
                content.setUserLike(userLike);
                contentRepository.save(content);
                Set<Content> contentLike = user.getContentLike();
                contentLike.remove(content);
                user.setContentLike(contentLike);
                userRepository.save(user);
                SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully liked.");
                return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
            } else if (!user.getContentLike().contains(content) && user.getContentDislike().contains(content) && likeForm.getLike().equals("cancel-dislike")) {
                content.setDislike(content.getDislike() - 1);
                content.setDailyDislike(content.getDailyDislike() - 1);
                Set<User> userDislike = content.getUserDislike();
                userDislike.remove(user);
                content.setUserDislike(userDislike);
                contentRepository.save(content);
                Set<Content> contentDislike = user.getContentDislike();
                contentDislike.remove(content);
                user.setContentDislike(contentDislike);
                userRepository.save(user);
                SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully liked.");
                return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
            } else {
                if (likeForm.getLike().equals("like"))
                    throw new BadRequestException("Content already liked or disliked.", ErrorCodes.CONTENT_ALREADY_DISLIKED);
                else if (likeForm.getLike().equals("dislike"))
                    throw new BadRequestException("Content already liked or disliked.", ErrorCodes.CONTENT_ALREADY_DISLIKED);
                else
                    throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
            }
        } else {
            throw new BadRequestException("Content is not valid.", ErrorCodes.CONTENT_NOT_VALID);

        }
    }

    @GetMapping("/getLikes")
    public ResponseEntity<?> getMyLikes(@RequestParam("like") String like, @RequestParam("userName") String userName) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));
        Set<Content> contentsForUser;
        if (like.equals("like")) {
            contentsForUser = user.getContentLike();
        } else if (like.equals("dislike")) {
            contentsForUser = user.getContentDislike();
        } else {
            throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
        }
        return ResponseEntity.ok().body(contentsForUser);
    }

}
