import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent {
  questionId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.questionId = this.route.snapshot.paramMap.get('id');
  }
}
