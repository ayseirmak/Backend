package com.innova.repository;

import com.innova.model.Topic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Integer> {
    Boolean existsByTopicName(String name);

    Optional<Topic> findByTopicName(String username);

    @Query("SELECT t.topicName FROM Topic t WHERE t.topicName LIKE lower(concat( '%',:topicName,'%'))")
    List<String> findTopicsWithPartOfName(@Param("topicName") String topicName);

    Page<Topic> findAllByOrderByCreateDateDesc(Pageable pageable);

    Page<Topic> findAllByOrderByContentNumberDesc(Pageable pageable);

}
