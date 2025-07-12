
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent {
  newQuestion = {
    title: '',
    description: '',
    tags: [] as string[]
  };

  tagsInput = '';

  constructor(private router: Router) {}

  submitQuestion() {
    this.newQuestion.tags = this.tagsInput.split(',').map(tag => tag.trim());
    console.log('New question submitted:', this.newQuestion);
    this.router.navigate(['/Home']);
  }
}
