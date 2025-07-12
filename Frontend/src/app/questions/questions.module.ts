import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    AskQuestionComponent,
    ViewQuestionComponent,
    AnswerBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ]
})
export class QuestionsModule { }
