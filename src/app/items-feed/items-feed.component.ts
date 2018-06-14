import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';
import {Item} from '../../item';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AlertService } from '../alert.service'


@Component({
  selector: 'app-items-feed',
  templateUrl: './items-feed.component.html',
  styleUrls: ['./items-feed.component.sass']
})
export class ItemsFeedComponent implements OnInit {
 items: Object[];
 cartItems:Item[]
 currentPage = 1
 message:string = "success"

 


  constructor(
    private itemService: ItemService,
    private cartService: CartService,
    private alertService: AlertService
    
  ) {
    this.cartItems = []
    this.items = []
  

   
  }

  ngOnInit() {
    this.getItems();
    
    
  }


  success(message: string) { 
    this.alertService.success(message);
  }

  clear() {
    this.alertService.clear();
  }
  

  getItems() {
    return this.itemService.getItems()
        .subscribe(items => {
          
          this.items = items['result'].map(item => {
            return {
              ...item,
              qty: 0
            }
            
          })
          
        })
  }

  onAddItemToCart (item) {


    if (!this.getItemInCart(item)){
      this.onIncrementItemQuantity(item)
      this.cartService.cartItems.push(item);
      this.cartService.announceCartItem(item);
      this.cartItems = this.cartService.cartItems;
      this.success("Successfully added to cart")
      setTimeout(()=>{
        this.alertService.clear()
      }, 2000)
      
    }
  }

  getItemInCart (cartItem) {
    return this.cartService.cartItems.filter(item => item['_id'] === cartItem['_id'])[0]
  }

  compareFeedItems () {
    let self = this;
    return this.items.length ? 

      this.items.map(item => {
        return self.getItemInCart(item) ? self.getItemInCart(item) : item;
      }) : 
      this.items;

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
