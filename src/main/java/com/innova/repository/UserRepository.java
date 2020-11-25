package com.innova.repository;

import com.innova.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    @Query("SELECT u.username FROM User u WHERE LOWER(u.username) LIKE LOWER(concat('%',:username,'%'))")
    List<String> findUserByUsernameLike(@Param("username") String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}