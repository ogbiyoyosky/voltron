import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
 
  @Input() item: any;
  @Output() onAddItemToCart = new EventEmitter<object>();

  @Output() onDecrementItemFromCart = new EventEmitter<object>();

  @Output() onRemoveItemFromCart = new EventEmitter<object>(); 

  @Output() onIncrementItemQuantity = new EventEmitter<object>(); 
    

  
  constructor(private cartService: CartService ) { }

  ngOnInit() {
  } 

  addItemToCart (item) {
    return this.onAddItemToCart.emit(item);
    
  }

  decrementItemFromCart(item) {
    return this.onDecrementItemFromCart.emit(item);
  }

  removeItemFromCart(item) {
    return this.onRemoveItemFromCart.emit(item);
  }


  incrementItemQuantity(item) {
    return this.onIncrementItemQuantity.emit(item);
    
  }
  
  

  
}
