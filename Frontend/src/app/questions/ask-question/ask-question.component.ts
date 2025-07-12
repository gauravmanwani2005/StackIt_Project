import { Component } from '@angular/core';


import { QuestionService } from '../question.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Editor, Validators } from 'ngx-editor';
@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent {
  

   submitQuestion(body: any){
    this.questService.submitQuestion(body).subscribe();
   }

  form!: FormGroup;
  isSubmitting = false;
  tags =[]

  constructor(
    private fb: FormBuilder,
    // private questionService: QuestionService,
    private router: Router,
    private questService:QuestionService
  ) {}

  ngOnInit(): void {
    // Initialize the rich text editor

    // Initialize the form with controls
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required], // rich text editor field
      tags: ['', Validators.required] // tags as comma-separated string
    });
  }

  

  onSubmitA(): void {
    if (this.form.invalid) {
      this.submitQuestion(this.form);
      return;
    }

    this.isSubmitting = true;

    // const questionPayload = {
    //   title: this.form.value.title,
    //   description: this.form.value.description, // HTML content
    //   tags: this.form.value.tags.split(',').map(tag => tag.trim())
    // };

    // Post the question to backend
    // this.questionService.postQuestion(questionPayload).subscribe({
    //   next: (res) => {
    //     console.log('Question submitted:', res);
    //     this.router.navigate(['/']); // Redirect to home or question list
    //   },
    //   error: (err) => {
    //     console.error('Submission failed:', err);
    //     alert('Something went wrong. Try again.');
    //     this.isSubmitting = false;
    //   }
    // });

    
  }
  submittedTags: string[] = [];


onTagInput(event: any): void {
  const inputValue: string = event.target.value;

  // If the last character is a space
  if (inputValue.endsWith(' ')) {
    const tag = inputValue.trim();

    if (tag && !this.submittedTags.includes(tag)) {
      this.submittedTags.push(tag);
    }

    // Clear the input field
    event.target.value = '';
  }
}

onSubmit(): void {
  console.log(this.form.value)
  if (this.form.invalid) {
    
  }

  const formValues = this.form.value;

  this.form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', Validators.required],
    tags: ['', Validators.required]  
  });
  const payload = {
    
    title: formValues.title,
    description: formValues.description,
    tags: (formValues.tags || '')
            .toString()
            .split(',')
            .map((tag: string) => tag.trim())
            .filter((tag: string | any[]) => tag.length > 0)
  };
  console.log('hi')

  // Example: simulate success (you can replace this with your backend call)
  this.submittedTags = payload.tags;

  console.log('Submitted:', payload);

  this.submitQuestion(payload);

  // Optionally reset form
  this.form.reset();
  
}

}
