create database stackit;
use stackit;
CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE Answer (
    answer_id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_accepted BOOLEAN DEFAULT FALSE
);

CREATE TABLE Question (
    question_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    accepted_answer_id INT,
    FOREIGN KEY (accepted_answer_id) REFERENCES Answer(answer_id)
);

CREATE TABLE Tag (
    tag_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Vote (
    vote_id INT PRIMARY KEY AUTO_INCREMENT,
    vote_type ENUM('up', 'down') NOT NULL,
    question_id INT,
    answer_id INT,
    FOREIGN KEY (question_id) REFERENCES Question(question_id),
    FOREIGN KEY (answer_id) REFERENCES Answer(answer_id)
);

CREATE TABLE Notification (
    notification_id INT PRIMARY KEY AUTO_INCREMENT,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE QuestionTag (
    question_id INT,
    tag_id INT,
    PRIMARY KEY (question_id, tag_id),
    FOREIGN KEY (question_id) REFERENCES Question(question_id),
    FOREIGN KEY (tag_id) REFERENCES Tag(tag_id)
);
INSERT INTO User (username, email, password_hash, role) VALUES
('john_doe', 'john@example.com', 'hashed_password_1', 'user'),
('jane_smith', 'jane@example.com', 'hashed_password_2', 'admin');

INSERT INTO Question (title, description) VALUES
('What is MySQL?', 'MySQL is an open-source relational database management system.'),
('How to use JOIN in SQL?', 'JOIN is used to combine rows from two or more tables.');

INSERT INTO Answer (content) VALUES
('MySQL is a popular database management system.'),
('You can use INNER JOIN, LEFT JOIN, RIGHT JOIN, etc.');

UPDATE Question SET accepted_answer_id = 1 WHERE question_id = 1;
UPDATE Question SET accepted_answer_id = 2 WHERE question_id = 2;

INSERT INTO Tag (name) VALUES
('Database'),
('SQL'),
('MySQL');

INSERT INTO Vote (vote_type, question_id) VALUES
('up', 1),
('down', 2);

INSERT INTO Notification (message) VALUES
('You have a new answer to your question.'),
('Your question has been upvoted.');

INSERT INTO QuestionTag (question_id, tag_id) VALUES
(1, 1),
(2, 2),
(1, 3);