import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() items = [];
  @Output() addedItem = new EventEmitter<string>();
  newItem = '';

  constructor() { }

  ngOnInit() {
  }

  onAddButtonClick(event) {
    this.addedItem.emit(this.newItem);
  }

}
