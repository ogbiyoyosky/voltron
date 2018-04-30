import { Component, OnInit } from '@angular/core';  
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import {Auth} from '../../auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  data: any;
  loginData: Auth = {
    "email": 'freeman@hotmail.com',
    "password": 'miracle123'
  }
  message : String = '';

  constructor(private AuthService: AuthService, private router: Router) {


   }

  ngOnInit() {
  }

  login(): void {
    this.AuthService.login(this.loginData)
        .subscribe(res => {
          this.data = res;
          localStorage.setItem('jwtToken', this.data.token);
          this.router.navigate(['items']);
        }, err => {
          this.message = err.error.msg;
        });
    
  }

}
