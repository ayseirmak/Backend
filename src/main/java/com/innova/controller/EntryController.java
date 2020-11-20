package com.innova.controller;

import com.innova.constants.ErrorCodes;
import com.innova.dto.request.ContentForm;
import com.innova.dto.request.LikeForm;
import com.innova.dto.request.TopicForm;
import com.innova.dto.response.SuccessResponse;
import com.innova.exception.BadRequestException;
import com.innova.model.*;
import com.innova.repository.*;
import com.innova.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.Date;
import java.util.Set;

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

    @Autowired
    ContentLikeRepository contentLikeRepository;

    @Autowired
    ContentDislikeRepository contentDislikeRepository;

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
    public ResponseEntity<?> getTopic(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok().body(topicRepository.findAll(pageable));
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
    public ResponseEntity<?> getContent(@RequestParam("topic") String topicName, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        if (topicRepository.existsByTopicName(topicName)) {
            Topic topic = topicRepository.findByTopicName(topicName);
            return ResponseEntity.ok().body(contentRepository.findByTopicOrderByDailyLikeDesc(topic, pageable));
        } else {
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        }
    }

    @GetMapping("/getMyContents")
    public ResponseEntity<?> getMyContents(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        return ResponseEntity.ok().body(contentRepository.findByUserOrderByCreateDateDesc(user, pageable));
    }

    @GetMapping("/getUserContents")
    public ResponseEntity<?> getUserContents(@RequestParam("userName") String userName, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));
        return ResponseEntity.ok().body(contentRepository.findByUserOrderByCreateDateDesc(user, pageable));
    }

    @PutMapping("/like-dislike")
    @Transactional
    public ResponseEntity<?> likeDislike(@Valid @RequestBody LikeForm likeForm) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        if (contentRepository.existsById(Integer.parseInt(likeForm.getContentID()))) {
            Content content = contentRepository.findById(Integer.parseInt(likeForm.getContentID()));
            if (!contentLikeRepository.existsByUserAndContent(user,content) && !contentDislikeRepository.existsByUserAndContent(user,content)) {
                if (likeForm.getLike().equals("like")) {
                    content.setLike(content.getLike() + 1);
                    content.setDailyLike(content.getDailyLike() + 1);
                    contentRepository.save(content);
                    contentLikeRepository.save(new ContentLike(user,content));
                    SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully liked.");
                    return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
                } else if (likeForm.getLike().equals("dislike")) {
                    content.setDislike(content.getDislike() + 1);
                    content.setDailyDislike(content.getDailyDislike() + 1);
                    contentRepository.save(content);
                    contentDislikeRepository.save(new ContentDislike(user,content));
                    SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully disliked.");
                    return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
                } else {
                    throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
                }
            } else if (contentLikeRepository.existsByUserAndContent(user,content) && !contentDislikeRepository.existsByUserAndContent(user,content) && likeForm.getLike().equals("cancel-like")) {
                content.setLike(content.getLike() - 1);
                content.setDailyLike(content.getDailyLike() - 1);
                contentRepository.save(content);
                contentLikeRepository.delete(contentLikeRepository.findByUserAndContent(user,content));
                SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully cancelled.");
                return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
            } else if (!contentLikeRepository.existsByUserAndContent(user,content) && contentDislikeRepository.existsByUserAndContent(user,content) && likeForm.getLike().equals("cancel-dislike")) {
                content.setDislike(content.getDislike() - 1);
                content.setDailyDislike(content.getDailyDislike() - 1);
                contentRepository.save(content);
                contentDislikeRepository.delete(contentDislikeRepository.findByUserAndContent(user,content));
                SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully cancelled.");
                return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
            } else {
                if (likeForm.getLike().equals("like"))
                    throw new BadRequestException("Content already liked.", ErrorCodes.CONTENT_ALREADY_LIKED);
                else if (likeForm.getLike().equals("dislike"))
                    throw new BadRequestException("Content already disliked.", ErrorCodes.CONTENT_ALREADY_DISLIKED);
                else
                    throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
            }
        } else {
            throw new BadRequestException("Content is not valid.", ErrorCodes.CONTENT_NOT_VALID);

        }
    }

    @GetMapping("/getLikes")
    public ResponseEntity<?> getMyLikes(@RequestParam("like") String like, @RequestParam("userName") String userName, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));
        if (like.equals("like")) {
            return ResponseEntity.ok().body(contentLikeRepository.findByUser(user,pageable));
        } else if (like.equals("dislike")) {
            return ResponseEntity.ok().body(contentDislikeRepository.findByUser(user,pageable));
        } else {
            throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
        }
    }

}
