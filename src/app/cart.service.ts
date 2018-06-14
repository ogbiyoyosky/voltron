import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import {Item} from '../item';
import { Observable } from 'rxjs/Observable';
import {reduce} from 'rxjs/operators/reduce'

@Injectable()
export class CartService {
  cartItems: Item[]  = [] 
  


  private totalSource = new Subject
  totalAnnouncer$ = this.totalSource.asObservable()

  private cartAnnouncerSource = new Subject<Object>()
  cartAnnouncer$ = this.cartAnnouncerSource.asObservable();

  constructor() {
    
  }

  announceCartItem (item) {
    return this.cartAnnouncerSource.next(item);
  }

  announceCartItemRemoval (item) {
    this.cartItems = this.cartItems.filter(currentItem => currentItem !== item);
    return this.cartAnnouncerSource.next(this.cartItems);
  }

  announceCartItemDecrement (item) {
      item.qty = item.qty - 1;
      
      return this.cartAnnouncerSource.next(this.cartItems);
  }


  announceIncrementItemQuantity (item) {

    item.qty = item.qty + 1;
    
    return this.cartAnnouncerSource.next(this.cartItems);
  }
  

  getCartItem() {
    return this.cartItems;
  }

  total (cartItems){
    return this.cartItems.reduce((total, cartItem)=> (cartItem.qty * cartItem.price) + total,0)
 
  }

  
}
