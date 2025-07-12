import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Editor } from 'ngx-editor';
// import { QuestionService } from '../services/question.service'; // adjust this path as needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-txt-editor.component.html',
  styleUrls: ['./rich-txt-editor.component.css']
})
export class RichTxtEditorComponent  {
  editor!: Editor;
  tags =[]
  @Input()
  description:any;

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngOnInit(){
    this.editor = new Editor();
  }
}
