import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import {HttpClientModule} from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    HttpClientModule,
    SharedModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
        RouterModule

  ]
})
export class QuestionsModule { }
