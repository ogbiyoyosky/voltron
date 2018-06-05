import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import {Item} from '../item';

@Injectable()
export class CartService {
  cartItems: Item[]  = [] 

  private cartAnnouncerSource = new Subject<Object>()
  cartAnnouncer$ = this.cartAnnouncerSource.asObservable();

  constructor() {

  }

  announceCartItem (item) {
    return this.cartAnnouncerSource.next(item);
  }

  announceCartItemDecrement (item) {
      item.qty = item.qty - 1;
      return this.cartAnnouncerSource.next(this.cartItems);
  }

  announceCartItemRemoval (item) {
    this.cartItems = this.cartItems.filter(currentItem => currentItem !== item);
    return this.cartAnnouncerSource.next(this.cartItems);
  }

  announceIncrementItemQuantity (item) {

    item.qty = item.qty + 1;
    console.log(item);
    return this.cartAnnouncerSource.next(this.cartItems);
  }


  getCartItem() {
    return this.cartItems;
  }
}
