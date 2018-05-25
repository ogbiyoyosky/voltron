import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.sass'],
})
export class AppNavbarComponent implements OnInit {

  private loggedIn: boolean;
  private authUser:object = null;
  cartItemsCount: number;
  
  constructor(
    private router: Router, 
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.cartItemsCount = 0
    authService.authAnnouncer$.subscribe(
      user => {
        this.authUser = user;
      }
    )

    cartService.cartAnnouncer$.subscribe(
      item => {
        this.cartItemsCount = cartService.cartItems.length;
      }
    )
   } 

  ngOnInit() {

  }

  logout () {
    this.authService.logOut();
    this.router.navigate(['login']);
  }

    
}