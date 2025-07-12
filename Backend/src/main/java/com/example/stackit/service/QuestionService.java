package com.example.stackit.service;

import com.example.stackit.domain.response.AnswerResponse;
import com.example.stackit.model.Question;
import com.example.stackit.model.QuestionRequest;
import com.example.stackit.repository.AnswerRepository;
import com.example.stackit.repository.QuestionRepository;
import com.example.stackit.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    @Autowired
    private AnswerRepository answerRepository;

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

    public List<AnswerResponse> getAnswersByQuestion(Integer questionId) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found"));
        return answerRepository.findByQuestion(question).stream().map(Mapper::getAnswer).collect(Collectors.toList());
    }

}
