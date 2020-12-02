package com.innova.controller;

import com.innova.constants.ErrorCodes;
import com.innova.dto.request.ContentForm;
import com.innova.dto.request.LikeForm;
import com.innova.dto.request.TopicForm;
import com.innova.dto.response.SuccessResponse;
import com.innova.exception.BadRequestException;
import com.innova.service.EntryService;
import com.innova.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;

@RestController
@RequestMapping("api/entry")
public class EntryController {

    @Autowired
    UserServiceImpl userServiceImpl;

    @Autowired
    EntryService entryService;

    @PostMapping("/addTopic")
    public ResponseEntity<?> addEntry(@Valid @RequestBody TopicForm topicForm) {
        if (entryService.existByTopicNameService(topicForm.getTopicName()))
            throw new BadRequestException("Topic Name is already used!", ErrorCodes.TOPIC_ALREADY_USED);

        entryService.addEntryService(topicForm);

        SuccessResponse response = new SuccessResponse(HttpStatus.OK, "New Topic added successfully.");
        return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
    }

    @GetMapping("/getTopics")
    public ResponseEntity<?> getTopic(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok().body(entryService.getTopicService(pageable));
    }

    @GetMapping("/getLikes/user")
    public ResponseEntity<?> getLikesUser(@RequestParam("id") String contentId, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        if (!entryService.existByContentIdService(contentId)) {
            throw new BadRequestException("Content is not exist.", ErrorCodes.CONTENT_NOT_VALID);
        }
        return ResponseEntity.ok().body(entryService.getLikesUserService(contentId, pageable));

    }

    @GetMapping("/getDislikes/user")
    public ResponseEntity<?> getDislikesUser(@RequestParam("id") String contentId, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        if (!entryService.existByContentIdService(contentId)) {
            throw new BadRequestException("Content is not exist.", ErrorCodes.CONTENT_NOT_VALID);
        }
        return ResponseEntity.ok().body(entryService.getDislikesUserService(contentId, pageable));

    }

    @GetMapping("/getTopics/contentNumber")
    public ResponseEntity<?> getTopicOrderByContent(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok().body(entryService.getTopicOrderByContentService(pageable));
    }

    @PostMapping("/addContent")
    public ResponseEntity<?> addContent(@Valid @RequestBody ContentForm contentForm) {
        if (!entryService.existByTopicIdService(contentForm.getTopicId())) {
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        } else {
            entryService.addContentService(contentForm);
            SuccessResponse response = new SuccessResponse(HttpStatus.OK, "New content added successfully.");
            return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
        }
    }

    @GetMapping("/getContent")
    public ResponseEntity<?> getContent(@RequestParam("id") String topicId, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        if (entryService.existByTopicIdService(topicId)) {
            return ResponseEntity.ok().body(entryService.getContentService(topicId, pageable));
        } else {
            throw new BadRequestException("Topic Name is not valid.", ErrorCodes.TOPIC_NOT_VALID);
        }
    }

    @GetMapping("/getTopicName")
    public ResponseEntity<?> getTopicName(@RequestParam("id") String topicId) {
        if (entryService.existByTopicIdService(topicId)) {
            return ResponseEntity.ok().body(entryService.getTopicNameService(topicId));
        } else {
            throw new BadRequestException("Topic Id is not exist.", ErrorCodes.TOPIC_NOT_VALID);
        }
    }

    @GetMapping("/getTopicId")
    public ResponseEntity<?> getContentWithTopicName(@RequestParam("topicName") String topicName) {
        if (entryService.existByTopicNameService(topicName)) {
            return ResponseEntity.ok().body(entryService.getTopicIdService(topicName));
        } else {
            throw new BadRequestException("Topic Name is not exist.", ErrorCodes.TOPIC_NOT_VALID);
        }
    }

    @GetMapping("/getContent/random")
    public ResponseEntity<?> getContentOrderByLike(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok().body(entryService.getContentOrderByLikeService(pageable));
    }

    @GetMapping("/getMyContents")
    public ResponseEntity<?> getMyContents(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok().body(entryService.getMyContentsService(pageable));
    }

    @GetMapping("/getUserContents")
    public ResponseEntity<?> getUserContents(@RequestParam("userName") String userName, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok().body(entryService.getUserContentsService(userName, pageable));
    }

    @PutMapping("/like-dislike")
    @Transactional
    public ResponseEntity<?> likeDislike(@Valid @RequestBody LikeForm likeForm) {
        if (entryService.existByContentIdService(likeForm.getContentID())) {
            String reMessage = entryService.likeDislikeService(likeForm);
            if (reMessage.equals("Hata")) {
                if (likeForm.getLike().equals("like"))
                    throw new BadRequestException("Content already liked.", ErrorCodes.CONTENT_ALREADY_LIKED);
                else if (likeForm.getLike().equals("dislike"))
                    throw new BadRequestException("Content already disliked.", ErrorCodes.CONTENT_ALREADY_DISLIKED);
                else
                    throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
            } else {
                SuccessResponse response = new SuccessResponse(HttpStatus.OK, reMessage);
                return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
            }

        } else {
            throw new BadRequestException("Content is not valid.", ErrorCodes.CONTENT_NOT_VALID);

        }
    }

    @GetMapping("/getLikes")
    public ResponseEntity<?> getMyLikes(@RequestParam("like") String like, @RequestParam("userName") String userName, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

        if (like.equals("like")) {
            return ResponseEntity.ok().body(entryService.getMyLikesService(userName, pageable));
        } else if (like.equals("dislike")) {
            return ResponseEntity.ok().body(entryService.getMyDislikesService(userName, pageable));
        } else {
            throw new BadRequestException("Something is wrong", ErrorCodes.SOMETHING_IS_WRONG);
        }
    }

    @DeleteMapping("/deleteContent")
    @Transactional
    public ResponseEntity<?> deleteContent(@RequestParam("contentId") String contentId, @RequestParam("topicId") String topicId) {
        if (!entryService.existByTopicIdService(topicId))
            throw new BadRequestException("Topic with given topicId could not found", ErrorCodes.TOPIC_NOT_VALID);
        entryService.deleteContentService(contentId, topicId);
        SuccessResponse response = new SuccessResponse(HttpStatus.OK, "Content removed successfully");
        return new ResponseEntity<>(response, new HttpHeaders(), response.getStatus());
    }

}
