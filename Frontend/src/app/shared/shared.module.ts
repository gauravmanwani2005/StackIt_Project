import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RichTxtEditorComponent } from './rich-txt-editor/rich-txt-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RichTxtEditorComponent,
    SharedComponent,
  ],
  imports: [
    CommonModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RichTxtEditorComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
