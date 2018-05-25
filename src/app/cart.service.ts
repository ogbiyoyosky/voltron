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

  announceCartItemRemoval (item) {
    this.cartItems = this.cartItems.filter(currentItem => currentItem !== item);

    return this.cartAnnouncerSource.next(this.cartItems);
  }

  getCartItem() {
    return this.cartItems;
  }
}
