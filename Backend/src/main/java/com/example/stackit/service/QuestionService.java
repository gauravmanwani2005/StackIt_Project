package com.example.stackit.service;

import com.example.stackit.model.Question;
import com.example.stackit.model.QuestionRequest;
import com.example.stackit.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question createQuestion(QuestionRequest request) {
        Question question = new Question();
        question.setTitle(request.getTitle());
        question.setDescription(request.getDescription());
//        question.setCreatedAt();

        return questionRepository.save(question);
    }

}
