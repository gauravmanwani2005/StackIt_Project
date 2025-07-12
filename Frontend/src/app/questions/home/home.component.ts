import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  questions = [
    {
      id: 1,
      title: 'How to implement JWT authentication in React?',
      description: 'I\'m building a React app with token-based authentication. What\'s the best way to store and handle tokens?',
      author: 'john_dev',
      votes: 15,
      tags: ['React', 'JWT', 'Authentication', 'Security'],
      answers: [
        { text: 'Use httpOnly cookies for security.' },
        { text: 'Don\'t store tokens in localStorage.' }
      ]
    },
    {
      id: 2,
      title: 'Best practices for React component organization',
      description: 'What are some ways to keep large React projects modular and maintainable?',
      author: 'jane_code',
      votes: 8,
      tags: ['React', 'Component', 'Best Practices'],
      answers: [
        { text: 'Use folder-by-feature structure.' }
      ]
    },
    {
      id: 3,
      title: 'What is the difference between let and var in JavaScript?',
      description: 'Explain the difference between let and var with examples.',
      author: 'dev_guru',
      votes: 10,
      tags: ['JavaScript', 'Variables'],
      answers: [
        { text: 'let is block-scoped, var is function-scoped.' }
      ]
    }
  ];

  filteredQuestions = [...this.questions];

  get allTags(): string[] {
    const tagSet = new Set<string>();
    this.questions.forEach(q => q.tags.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet);
  }

  performSearch(term: string) {
    const keyword = term.toLowerCase();
    this.filteredQuestions = this.questions.filter(q =>
      q.title.toLowerCase().includes(keyword) ||
      q.description.toLowerCase().includes(keyword) ||
      q.tags.some(tag => tag.toLowerCase().includes(keyword))
    );
  }
} 