
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
      title: 'How does collaborative learning work on StackIt?',
      author: 'Alice',
      votes: 12,
      tags: ['collaboration', 'learning'],
      answers: [{ text: 'It allows users to contribute and improve answers together.' }]
    },
    {
      id: 2,
      title: 'What is the best way to ask a question?',
      author: 'Bob',
      votes: 8,
      tags: ['questions', 'tips'],
      answers: [
        { text: 'Be clear and provide context for your problem.' },
        { text: 'Use relevant tags to reach the right audience.' }
      ]
    }
  ];
}
