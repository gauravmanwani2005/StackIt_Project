import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RichTxtEditorComponent } from './shared/rich-txt-editor/rich-txt-editor.component';
import { AskQuestionComponent } from './questions/ask-question/ask-question.component';

const routes: Routes = [
  {
    path:'login-s',
    component:LoginComponent
  },
  {
    path:'register-s',
    component:RegisterComponent
  },
  {
    path:'question',
    component:AskQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
