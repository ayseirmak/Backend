package com.innova.repository;

import com.innova.model.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentDislikeRepository extends JpaRepository<ContentDislike, ContentDislikeKey> {
    Page<ContentDislike> findByUser(User user, Pageable pageable);

    ContentDislike findByUserAndContent(User user, Content content);

    boolean existsByUserAndContent(User user, Content content);

}
