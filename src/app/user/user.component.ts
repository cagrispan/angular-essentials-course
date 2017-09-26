import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() name;
  @Output() changedName = new EventEmitter<string>();

  onUserInput(event) {
    this.changedName.emit(event.target.value);
  }
}
