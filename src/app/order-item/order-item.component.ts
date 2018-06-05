import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.sass']
})
export class OrderItemComponent implements OnInit {
  @Input() cartItem: any;


  @Output() onDecrementItemFromCart = new EventEmitter<object>();

  @Output() onRemoveItemFromCart = new EventEmitter<object>(); 

  @Output() onIncrementItemQuantity = new EventEmitter<object>(); 
  
  constructor() { }

  ngOnInit() {
  }
  
  decrementItemFromCart(cartItem) {
    return this.onDecrementItemFromCart.emit(cartItem);
  }

  removeItemFromCart(cartItem) {
    return this.onRemoveItemFromCart.emit(cartItem);
  }


  incrementItemQuantity(cartItem) {
    return this.onIncrementItemQuantity.emit(cartItem);
    
  }

}
