
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: '<nav><a routerLink="/Home">Home</a> | <a routerLink="/questions/ask-question">Ask Question</a></nav>',
  styles: ['nav { padding: 1rem; background: #2d7ff9; color: white; } a { color: white; margin-right: 10px; }']
})
export class NavbarComponent { }
