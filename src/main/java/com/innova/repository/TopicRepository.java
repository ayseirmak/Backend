package com.innova.repository;

import com.innova.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Integer> {
    Boolean existsByTopicName(String name);

    Topic findByTopicName(String username);

    List<Topic> findAllByOrderByCreateDateDesc();

}
