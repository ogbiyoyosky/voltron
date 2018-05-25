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

  onRemoveItemFromCart(cartItem: Item) {
    this.cartService.announceCartItemRemoval(cartItem);
    this.getOrderItems()
  }

  

  ngOnInit() {
  }

}
