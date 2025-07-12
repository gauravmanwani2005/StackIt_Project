package com.example.stackit.domain.response;

public class AuthResponse {
    private String token;

    public AuthResponse() {
        token = null;
    }

    public AuthResponse(String token) {
        this.token = token;
    }
}
