import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RichTextEditorComponent } from './rich-txt-editor/rich-txt-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RichTextEditorComponent
  ],
  imports: [
    CommonModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
