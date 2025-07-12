package com.example.stackit.controller;

import com.example.stackit.domain.request.AnswerRequest;
import com.example.stackit.domain.response.AnswerResponse;
import com.example.stackit.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answer")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @PostMapping
    public AnswerResponse createAnswer(@RequestBody AnswerRequest answerRequest) {
        return answerService.createAnswer(answerRequest);
    }

    @PutMapping("/{id}")
    public AnswerResponse updateAnswer(@PathVariable Integer id, @RequestBody AnswerRequest answerRequest) {
        return answerService.updateAnswer(id, answerRequest);
    }

    @DeleteMapping("/{id}")
    public void deleteAnswer(@PathVariable Integer id) {
        answerService.deleteAnswer(id);
    }

}
