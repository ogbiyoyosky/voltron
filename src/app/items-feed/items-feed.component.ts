import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {Item} from '../../item';


@Component({
  selector: 'app-items-feed',
  templateUrl: './items-feed.component.html',
  styleUrls: ['./items-feed.component.sass']
})
export class ItemsFeedComponent implements OnInit {
 items: object;
 cartItems: Item[]

  constructor(private itemService: ItemService) {
    this.cartItems = [];
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
    !this.cartItems.includes(item) && this.cartItems.push(item)
    console.log(this.cartItems)
  }
 
} 
