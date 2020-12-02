package com.innova.service;

import com.innova.constants.ErrorCodes;
import com.innova.dto.request.ContentForm;
import com.innova.dto.request.LikeForm;
import com.innova.dto.request.TopicForm;
import com.innova.exception.BadRequestException;
import com.innova.model.*;
import com.innova.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class EntryService {

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

    @Autowired
    UserServiceImpl userServiceImpl;

    public Page<Topic> getTopicService(Pageable pageable) {
        return topicRepository.findAllByOrderByCreateDateDesc(pageable);
    }

    public void addEntryService(TopicForm topicForm) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        LocalDateTime date = LocalDateTime.now();
        Topic topic = new Topic(topicForm.getTopicName(), 0, user, date);
        topicRepository.save(topic);
    }

    public boolean existByTopicNameService(String topicName) {
        if (topicRepository.existsByTopicName(topicName)) {
            return true;
        }
        return false;
    }

    public boolean existByTopicIdService(String id) {
        if (topicRepository.existsById(Integer.parseInt(id))) {
            return true;
        }
        return false;
    }

    public boolean existByContentIdService(String contentId) {
        if (contentRepository.existsById(Integer.parseInt(contentId))) {
            return true;
        }
        return false;
    }


    public Page<ContentLike> getLikesUserService(String contentId, Pageable pageable) {
        Content content = contentRepository.findById(Integer.parseInt(contentId));
        return contentLikeRepository.findByContent(content, pageable);
    }

    public Page<ContentDislike> getDislikesUserService(String contentId, Pageable pageable) {
        Content content = contentRepository.findById(Integer.parseInt(contentId));
        return contentDislikeRepository.findByContent(content, pageable);
    }

    public Page<Topic> getTopicOrderByContentService(Pageable pageable) {
        return topicRepository.findAllByOrderByContentNumberDesc(pageable);
    }

    public void addContentService(ContentForm contentForm) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        LocalDateTime date = LocalDateTime.now();
        Topic topic = topicRepository.findById(Integer.parseInt(contentForm.getTopicId())).orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));
        Content content = new Content(contentForm.getContent(), 0, 0, 0, 0, date, user, topic);
        contentRepository.save(content);
        topic.setContentNumber(topic.getContentNumber() + 1);
        topic.addCloud_content(content);
        topicRepository.save(topic);
        user.addContent(content);
        userRepository.save(user);
    }

    public Page<Content> getContentService(String topicId, Pageable pageable) {
        Topic topic = topicRepository.findById(Integer.parseInt(topicId)).orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));
        return contentRepository.findByTopicOrderByDailyLikeDesc(topic, pageable);
    }

    public String getTopicNameService(String topicId) {
        Topic topic = topicRepository.findById(Integer.parseInt(topicId)).orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));
        ;
        return (topic.getTopicName());
    }

    public String getTopicIdService(String topicName) {
        Topic topic = topicRepository.findByTopicName(topicName).orElseThrow(() -> new BadRequestException("Topic with given topicname could not found", ErrorCodes.TOPIC_NOT_VALID));
        ;
        return (topic.getTopicName());
    }

    public Page<Content> getContentOrderByLikeService(Pageable pageable) {
        return contentRepository.findByOrderByLikeDesc(pageable);
    }

    public Page<Content> getMyContentsService(Pageable pageable) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        return contentRepository.findByUserOrderByCreateDateDesc(user, pageable);
    }

    public Page<Content> getUserContentsService(String userName, Pageable pageable) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));
        return contentRepository.findByUserOrderByCreateDateDesc(user, pageable);
    }

    public Page<ContentLike> getMyLikesService(String userName, Pageable pageable) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));
        return contentLikeRepository.findByUser(user, pageable);
    }

    public Page<ContentDislike> getMyDislikesService(String userName, Pageable pageable) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new BadRequestException("User with given username could not found", ErrorCodes.NO_SUCH_USER));
        return contentDislikeRepository.findByUser(user, pageable);
    }

    public void deleteContentService(String contentId, String topicId) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        Topic topic = topicRepository.findById(Integer.parseInt(topicId)).orElseThrow(() -> new BadRequestException("Topic with given topicId could not found", ErrorCodes.TOPIC_NOT_VALID));
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
    }


    public String likeDislikeService(LikeForm likeForm) {
        User user = userServiceImpl.getUserWithAuthentication(SecurityContextHolder.getContext().getAuthentication());
        Content content = contentRepository.findById(Integer.parseInt(likeForm.getContentID()));
        if (!contentLikeRepository.existsByUserAndContent(user, content) && !contentDislikeRepository.existsByUserAndContent(user, content) && likeForm.getLike().equals("like")) {
            content.setLike(content.getLike() + 1);
            content.setDailyLike(content.getDailyLike() + 1);
            contentRepository.save(content);
            contentLikeRepository.save(new ContentLike(user, content));
            return "Successfully liked.";
            }
        else if (!contentLikeRepository.existsByUserAndContent(user, content) && !contentDislikeRepository.existsByUserAndContent(user, content) && likeForm.getLike().equals("dislike")) {
            content.setDislike(content.getDislike() + 1);
            content.setDailyDislike(content.getDailyDislike() + 1);
            contentRepository.save(content);
            contentDislikeRepository.save(new ContentDislike(user, content));
            return "Successfully disliked.";
        }else if (contentLikeRepository.existsByUserAndContent(user, content) && !contentDislikeRepository.existsByUserAndContent(user, content) && likeForm.getLike().equals("cancel-like")) {
            content.setLike(content.getLike() - 1);
            content.setDailyLike(content.getDailyLike() - 1);
            contentRepository.save(content);
            contentLikeRepository.delete(contentLikeRepository.findByUserAndContent(user, content));
            return "Successfully cancelled.";
        } else if (!contentLikeRepository.existsByUserAndContent(user, content) && contentDislikeRepository.existsByUserAndContent(user, content) && likeForm.getLike().equals("cancel-dislike")) {
            content.setDislike(content.getDislike() - 1);
            content.setDailyDislike(content.getDailyDislike() - 1);
            contentRepository.save(content);
            contentDislikeRepository.delete(contentDislikeRepository.findByUserAndContent(user, content));
            return "Successfully cancelled.";
        } else{
            return "Hata";
        }
    }
}
