import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';
import {Item} from '../../item';


@Component({
  selector: 'app-items-feed',
  templateUrl: './items-feed.component.html',
  styleUrls: ['./items-feed.component.sass']
})
export class ItemsFeedComponent implements OnInit {
 items: Object[];
 cartItems:Item[]
 


  constructor(
    private itemService: ItemService,
    private cartService: CartService,
    
  ) {
    this.cartItems = []
    this.items = []
  }
  
  ngOnInit() {
    this.getItems();
    
  }
  

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => {
          this.items = items['result'].map(item => {
            return {
              ...item,
              qty: 0
            }
            
          })
        });
  }

  onAddItemToCart (item) {


    if (!this.getItemInCart(item)){
      this.onIncrementItemQuantity(item)
      this.cartService.cartItems.push(item);
      this.cartService.announceCartItem(item);
      this.cartItems = this.cartService.cartItems;
      

    }
  }

  getItemInCart (cartItem) {
    return this.cartService.cartItems.filter(item => item['_id'] === cartItem['_id'])[0]
  }

  compareFeedItems () {
    let self = this;
    return this.items.length ? this.items.map(item => {
      return self.getItemInCart(item) ? self.getItemInCart(item) : item;
    }) : this.items;
  }

  onDecrementItemFromCart(item: Item) {
    this.cartService.announceCartItemDecrement(item);
    
  }

  onIncrementItemQuantity(item) {  
    this.cartService.announceIncrementItemQuantity(item);
    

  }

  onRemoveItemFromCart(item) {
    this.cartService.announceCartItemRemoval(item);
    this.onDecrementItemFromCart(item)
    
  }
 
} 
