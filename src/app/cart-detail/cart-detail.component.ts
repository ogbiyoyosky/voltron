import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import {Item} from '../../item';


@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.sass']
})
export class CartDetailComponent implements OnInit {
total

  constructor(private cartService : CartService ) {

    this.total = this.cartService.total()
   }

  ngOnInit() {
     
  }

  
}
