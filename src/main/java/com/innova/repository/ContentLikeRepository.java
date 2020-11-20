package com.innova.repository;

import com.innova.model.Content;
import com.innova.model.ContentLike;
import com.innova.model.ContentLikeKey;
import com.innova.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentLikeRepository extends JpaRepository<ContentLike, ContentLikeKey> {
    Page<ContentLike> findByUser(User user, Pageable pageable);

    ContentLike findByUserAndContent(User user, Content content);

    boolean existsByUserAndContent(User user, Content content);
}
