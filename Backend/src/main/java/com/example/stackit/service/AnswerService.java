package com.example.stackit.service;

import com.example.stackit.domain.request.AnswerRequest;
import com.example.stackit.domain.response.AnswerResponse;
import com.example.stackit.entity.AnswerEntity;
import com.example.stackit.model.Question;
import com.example.stackit.repository.AnswerRepository;
import com.example.stackit.repository.QuestionRepository;
import com.example.stackit.repository.UserRepository;
import com.example.stackit.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnswerService {


    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuestionRepository questionRepository;

    public AnswerResponse createAnswer(AnswerRequest answerRequest) {
        AnswerEntity answer = new AnswerEntity();
        answer.setContent(answerRequest.content);
        answer.setAccepted(false);
        answer.setUser(userRepository.findById(answerRequest.userId)
                .orElseThrow(() -> new RuntimeException("User not found")));
        answer.setQuestion(questionRepository.findById(answerRequest.questionId)
                .orElseThrow(() -> new RuntimeException("Question not found")));
        answer = answerRepository.save(answer);
        return Mapper.getAnswer(answer);
    }

    public AnswerResponse updateAnswer(Integer id, AnswerRequest answerRequest) {
        AnswerEntity answer = answerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Answer not found"));
        answer.setContent(answerRequest.content);
        answer.setUser(userRepository.findById(answerRequest.userId)
                .orElseThrow(() -> new RuntimeException("User not found")));
        answer.setQuestion(questionRepository.findById(answerRequest.questionId)
                .orElseThrow(() -> new RuntimeException("Question not found")));
        answer = answerRepository.save(answer);
        return Mapper.getAnswer(answer);
    }

    public void deleteAnswer(Integer id) {
        if (!answerRepository.existsById(id)) {
            throw new RuntimeException("Answer not found");
        }
        answerRepository.deleteById(id);
    }

    public List<AnswerResponse> getAnswersByQuestion(Integer questionId) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return answerRepository.findByQuestion(question).stream().map(Mapper::getAnswer).collect(Collectors.toList());
    }
}
