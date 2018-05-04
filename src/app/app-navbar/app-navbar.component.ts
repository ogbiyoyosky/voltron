import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.sass']
})
export class AppNavbarComponent implements OnInit {

  private loggedIn: boolean;
  private authUser:object = null;

  constructor(private router: Router, private AuthService: AuthService ) {
    AuthService.authAnnouncer$.subscribe(
      user => {
        this.authUser = user;
      }
    )
   } 

  ngOnInit() {

  }

  logout () {
    this.AuthService.logOut();
    this.router.navigate(['login']);
  }

    
}