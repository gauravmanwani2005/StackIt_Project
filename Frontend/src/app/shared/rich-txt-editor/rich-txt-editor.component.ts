import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-txt-editor.component.html',
  styleUrls: ['./rich-txt-editor.component.css']
})
export class RichTextEditorComponent implements OnInit, OnDestroy {
  editor!: Editor;
  form!: FormGroup;

  ngOnInit(): void {
    this.editor = new Editor();
    this.form = new FormGroup({
      content: new FormControl('')
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  submitContent() {
    const content = this.form.value.content;
    console.log('Submitted:', content);
  }
}

