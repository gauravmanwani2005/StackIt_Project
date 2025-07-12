package com.example.stackit.controller;

import com.example.stackit.domain.response.AnswerResponse;
import com.example.stackit.model.Question;
import com.example.stackit.model.QuestionRequest;
import com.example.stackit.service.QuestionService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/question")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("/all")
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @PostMapping
    public ResponseEntity<Question> createQuestion(@RequestBody QuestionRequest request) {
        Question created = questionService.createQuestion(request);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PostMapping("/answers")
    public List<AnswerResponse> getAnswersByQuestion(@RequestBody Map<String, Integer> question) {
        return questionService.getAnswersByQuestion(question.get("questionId"));
    }

}
