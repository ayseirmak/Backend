package com.innova.repository;

import com.innova.model.Content;
import com.innova.model.Topic;
import com.innova.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface ContentRepository extends JpaRepository<Content, Integer> {
    Boolean existsById(int id);

    Content findById(int id);

    Page<Content> findByUserOrderByCreateDateDesc(User user, Pageable pageable);
    Page<Content> findByTopicOrderByDailyLikeDesc(Topic topic, Pageable pageable);

}