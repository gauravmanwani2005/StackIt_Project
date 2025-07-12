# Team Details and Project Title

- **Team Name**: Team 2028
- **Team Members**: Gaurav Manwani, Gaurav Joshi, Yash Hirwani, Chaitanya Jhade
- **Email**: gauravmanwani2005@gmail.com
- **Project Title**: StackIt - A Minimal Q&A Forum Platform

## Overview

StackIt is a minimal question-and-answer platform designed to foster collaborative learning and structured knowledge sharing. The platform is simple, user-friendly, and focuses on the core experience of asking and answering questions within a community.

## ER Diagram
![ER Diagram](ER_StackIt.png)

## Project Explanation:-

### Technology Stack

- **Frontend**: Angular - Provides a dynamic and responsive user interface.
- **Backend**: Spring Boot - Handles business logic and API endpoints.
- **Database**: MySQL - Stores user data, questions, answers, tags, votes, and notifications.

### Screen Design

- **Screen 1 (Home Page)**:
  - Displays a navbar with filters, notifications, and a search box.
  - On the right side, a profile icon shows user details including username, badge, and the number of questions posted.
  - Main content area lists questions with tags, accepted answers (if any), and total number of answers, filtered based on navbar options.
  - Includes a breadcrumb navigation and pagination for question browsing.
- **Screen 2 (Ask Question)**:
  - Allows users to create a new question with fields for title, description (using a rich text editor), and tags.
  - Features a "Submit" button to post the question.
- **Screen 3 (Answer Question)**:
  - Displays a specific question with its description and a text area for users to submit answers.
  - Includes a "Submit Your Answer" button and pagination for multiple answers.

## Answers to Project Questions

- **What is your project about?**

  StackIt is a Q&A platform where users can ask questions, provide answers, vote on responses, and tag content for better organization. It includes a notification system and user profiles.
- **Why did you develop it, what was your motivation?** 

  We were motivated by the need for a simple, community-driven learning tool. Our goal was to create a platform that encourages knowledge exchange and collaboration, inspired by the success of existing forums.
- **What problem does it solve?**

  StackIt addresses the challenge of scattered knowledge by providing a structured environment for asking and answering questions, reducing information overload, and promoting peer learning.
- **What have you learned?**

  We gained experience in Angular for frontend development, Spring Boot for backend integration, and MySQL for database management. We also learned about designing ERDs and implementing user authentication and notification systems.
- **What makes your project stand out?**

  StackIt stands out with its clean Angular-based interface, efficient MySQL-Spring Boot integration, and a focus on minimalism with essential features like rich text editing and real-time notifications, tailored for community engagement.

## Features

- **Ask Question**: Users can submit questions with a title, description (using a rich text editor), and tags.
- **Rich Text Editor**: Supports bold, italic, strikethrough, numbered/bullet lists, emoji insertion, hyperlinks, image upload, and text alignment.
- **Answering Questions**: Logged-in users can post answers using the rich text editor.
- **Voting & Accepting Answers**: Users can upvote/downvote answers, and question owners can mark one answer as accepted.
- **Tagging**: Questions can be tagged with relevant topics (e.g., React, Java).
- **Notification System**: Users receive notifications for answers, comments, or mentions, with an unread count indicator.

## User Roles

- **Regular Users**: Can ask questions, answer, vote, and manage notifications.
- **Admin**: Can reject inappropriate content, ban users, send platform-wide messages, and download activity reports.

## Demo
- Screenshots:
  ![Home Page](Home-page.jpeg)
  ![Ask Question](Ask_question.jpeg)

## Prerequisites
- Node.js >= 16.x
- Angular CLI
- Java 17+ (for Spring Boot)
- MySQL Server

## Getting Started

- **Node.js** (v16 or higher) & npm — [Download](https://nodejs.org/)  
- **Angular CLI** — Install with:
  ```bash
  npm install -g @angular/cli

- **Clone the Repository**
  git clone https://github.com/gauravmanwani2005/StackIt_Project.git
  cd your-repo-name

- **Frontend (Angular)**
  ```bash
  cd frontend           # navigate to the frontend folder
  npm install           # install Angular dependencies
  ng serve              # start the Angular dev server

- **Backend (Spring Boot)**
  ```bash
  cd backend            # navigate to the backend folder
  ./mvnw spring-boot:run

  


