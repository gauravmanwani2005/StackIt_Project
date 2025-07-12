
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { HomeComponent } from './questions/home/home.component';
import { ViewQuestionComponent } from './questions/view-question/view-question.component';
import { AskQuestionComponent } from './questions/ask-question/ask-question.component';

const routes: Routes = [
  { path: 'login-s', component: LoginComponent },
  { path: 'register-s', component: RegisterComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'questions/view-question/:id', component: ViewQuestionComponent },
  { path: 'questions/ask-question', component: AskQuestionComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
