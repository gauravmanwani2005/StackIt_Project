package com.example.stackit.repository;

import com.example.stackit.entity.AnswerEntity;
import com.example.stackit.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<AnswerEntity, Integer> {

    List<AnswerEntity> findByQuestion(Question question);
}
