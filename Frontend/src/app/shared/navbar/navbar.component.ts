import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() notificationClicked: EventEmitter<void> = new EventEmitter<void>();

  onSearchInputChange() {
    this.search.emit(this.searchTerm);
  }

  onNotificationClick() {
    this.notificationClicked.emit();
  }
}
