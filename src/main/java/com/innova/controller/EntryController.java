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
import java.time.LocalDateTime;
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
        LocalDateTime date = LocalDateTime.now();
        Topic topic = new Topic(topicForm.getTopicName(), 0, user, date);
        topicRepository.save(topic);

        SuccessResponse response = new SuccessResponse(HttpStatus.OK, "New Topic added successfully.");
        return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
    }

    @GetMapping("/getTopics")
    public ResponseEntity<?> getTopic(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok().body(topicRepository.findAllByOrderByCreateDateDesc(pageable));
    }

    @GetMapping("/getLikes/user")
    public ResponseEntity<?> getLikesUser(@RequestParam("id") String contentId, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        if(contentRepository.existsById(Integer.parseInt(contentId))){
            Content content = contentRepository.findById(Integer.parseInt(contentId));
            return ResponseEntity.ok().body(contentLikeRepository.findByContent(content,pageable));
        }
        else
            throw new BadRequestException("Content is not exist.", ErrorCodes.CONTENT_NOT_VALID);

    }
    @GetMapping("/getDislikes/user")
    public ResponseEntity<?> getDislikesUser(@RequestParam("id") String contentId, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        if(contentRepository.existsById(Integer.parseInt(contentId))){
            Content content = contentRepository.findById(Integer.parseInt(contentId));
            return ResponseEntity.ok().body(contentDislikeRepository.findByContent(content,pageable));
        }
        else
            throw new BadRequestException("Content is not exist.", ErrorCodes.CONTENT_NOT_VALID);

    }

    @GetMapping("/getTopics/contentNumber")
    public ResponseEntity<?> getTopicOrderByContent(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok().body(topicRepository.findAllByOrderByContentNumberDesc(pageable));
    }

    @PostMapping("/addContent")
    public ResponseEntity<?> addContent(@Valid @RequestBody ContentForm contentForm) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        LocalDateTime date = LocalDateTime.now();

        if (!topicRepository.existsById(Integer.parseInt(contentForm.getTopicId()))) {
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        } else {
            Topic topic = topicRepository.findById(Integer.parseInt(contentForm.getTopicId())).orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));;
            Content content = new Content(contentForm.getContent(), 0, 0, 0, 0, date, user, topic);
            contentRepository.save(content);
            topic.setContentNumber(topic.getContentNumber() + 1);
            topic.addCloud_content(content);
            topicRepository.save(topic);
            user.addContent(content);
            userRepository.save(user);
            SuccessResponse response = new SuccessResponse(HttpStatus.OK, "New content added successfully.");
            return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
        }
    }

    @GetMapping("/getContent")
    public ResponseEntity<?> getContent(@RequestParam("id") String topicId, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        if (topicRepository.existsById(Integer.parseInt(topicId))) {
            Topic topic = topicRepository.findById(Integer.parseInt(topicId)).orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));;
            return ResponseEntity.ok().body(contentRepository.findByTopicOrderByDailyLikeDesc(topic, pageable));
        } else {
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        }
    }

    @GetMapping("/getTopicName")
    public ResponseEntity<?> getContent(@RequestParam("id") String topicId ) {
        if (topicRepository.existsById(Integer.parseInt(topicId))) {
            Topic topic = topicRepository.findById(Integer.parseInt(topicId)).orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));;
            return ResponseEntity.ok().body(topic.getTopicName());
        } else {
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        }
    }

    @GetMapping("/getContent/random")
    public ResponseEntity<?> getContentOrderByLike(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
            return ResponseEntity.ok().body(contentRepository.findByOrderByLikeDesc(pageable));
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
            if (!contentLikeRepository.existsByUserAndContent(user, content) && !contentDislikeRepository.existsByUserAndContent(user, content)) {
                if (likeForm.getLike().equals("like")) {
                    content.setLike(content.getLike() + 1);
                    content.setDailyLike(content.getDailyLike() + 1);
                    contentRepository.save(content);
                    contentLikeRepository.save(new ContentLike(user, content));
                    SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully liked.");
                    return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
                } else if (likeForm.getLike().equals("dislike")) {
                    content.setDislike(content.getDislike() + 1);
                    content.setDailyDislike(content.getDailyDislike() + 1);
                    contentRepository.save(content);
                    contentDislikeRepository.save(new ContentDislike(user, content));
                    SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully disliked.");
                    return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
                } else {
                    throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
                }
            } else if (contentLikeRepository.existsByUserAndContent(user, content) && !contentDislikeRepository.existsByUserAndContent(user, content) && likeForm.getLike().equals("cancel-like")) {
                content.setLike(content.getLike() - 1);
                content.setDailyLike(content.getDailyLike() - 1);
                contentRepository.save(content);
                contentLikeRepository.delete(contentLikeRepository.findByUserAndContent(user, content));
                SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Successfully cancelled.");
                return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
            } else if (!contentLikeRepository.existsByUserAndContent(user, content) && contentDislikeRepository.existsByUserAndContent(user, content) && likeForm.getLike().equals("cancel-dislike")) {
                content.setDislike(content.getDislike() - 1);
                content.setDailyDislike(content.getDailyDislike() - 1);
                contentRepository.save(content);
                contentDislikeRepository.delete(contentDislikeRepository.findByUserAndContent(user, content));
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
            return ResponseEntity.ok().body(contentLikeRepository.findByUser(user, pageable));
        } else if (like.equals("dislike")) {
            return ResponseEntity.ok().body(contentDislikeRepository.findByUser(user, pageable));
        } else {
            throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
        }
    }

    @DeleteMapping("/deleteContent")
    @Transactional
    public ResponseEntity<?> deleteContent(@RequestParam("contentId") String contentId, @RequestParam("topicName") String topicName) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        Topic topic = topicRepository.findByTopicName(topicName).orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));;
        Content content = contentRepository.findById(Integer.parseInt(contentId));
        if (contentLikeRepository.existsByUserAndContent(user, content))
            contentLikeRepository.delete(contentLikeRepository.findByUserAndContent(user, content));
        if (contentDislikeRepository.existsByUserAndContent(user, content))
            contentDislikeRepository.delete(contentDislikeRepository.findByUserAndContent(user, content));
        topic.setContentNumber(topic.getContentNumber() - 1);
        topic.removeCloud_content(content);
        user.removeContent(content);
        topicRepository.save(topic);
        userRepository.save(user);
        contentRepository.delete(content);
        SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Content removed successfully");
        return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
    }

}
