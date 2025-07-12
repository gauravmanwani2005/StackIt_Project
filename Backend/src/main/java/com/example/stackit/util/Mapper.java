package com.example.stackit.util;

import com.example.stackit.domain.response.AnswerResponse;
import com.example.stackit.entity.AnswerEntity;

public class Mapper {

    public static AnswerResponse getAnswer(AnswerEntity answerEntity) {
        AnswerResponse answerResponse = new AnswerResponse();
        answerResponse.setAnswerId(answerEntity.getAnswerId());
        answerResponse.setContent(answerEntity.getContent());
        answerResponse.setUsername(answerEntity.getUser().getUsername());
        answerResponse.setUserId(answerEntity.getUser().getUserId());
        answerResponse.setQuestionId(answerEntity.getQuestion().getQuestionId());

        return answerResponse;
    }

}
