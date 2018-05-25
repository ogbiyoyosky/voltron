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
 items: object;
 cartItems:Item[]


  constructor(
    private itemService: ItemService,
    private cartService: CartService
  ) {
    this.cartItems = []
  }
  ngOnInit() {
    this.getItems();
  }
  

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => {
          this.items = items['result']
        });
  }

  onAddItemToCart (item) {
    if (!this.cartService.cartItems.includes(item)) {
      this.cartService.cartItems.push(item);
      this.cartService.announceCartItem(item);
      this.cartItems = this.cartService.cartItems;
    }
  }
 
} 
