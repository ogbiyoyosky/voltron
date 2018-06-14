import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';
import {Item} from '../../item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {

  cartItems:Item[]
  

  constructor(private cartService: CartService) { 
    this.getOrderItems();
  }

  getOrderItems() {
    this.cartItems =  this.cartService.getCartItem()

  }

  onDecrementItemFromCart(cartItem: Item) {
    this.cartService.announceCartItemDecrement(cartItem);
    this.getOrderItems()
    
  }

  onIncrementItemQuantity(cartItem: Item) {
    this.cartService.announceIncrementItemQuantity(cartItem);
    
  }

  onRemoveItemFromCart(cartItem: Item) {
    this.cartService.announceCartItemRemoval(cartItem);
    this.cartItems = this.cartService.cartItems
    
  }
  

  ngOnInit() {
  }

}
