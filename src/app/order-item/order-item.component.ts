import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.sass']
})
export class OrderItemComponent implements OnInit {
  @Input() cartItem: any;
  @Output() onRemoveItemFromCart = new EventEmitter<object>(); 
  
  constructor() { }

  ngOnInit() {
  }
  
  removeItemFromCart(cartItem) {
    return this.onRemoveItemFromCart.emit(cartItem);
  }

}
