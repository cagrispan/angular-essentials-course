import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';
  name = 'Carlos';
  items = ['Apples', 'Bananas', 'Cherries'];

  onNameChange(changedName) {
    this.name = changedName;
  }

  onAddItem(item) {
    this.items.push(item);
  }
}
