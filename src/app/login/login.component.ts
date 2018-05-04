import { Component, OnInit } from '@angular/core';  
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import {AuthLogin} from '../../auth.data.interfaces';
import {Auth} from '../../auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  data: any;

  loginData: AuthLogin = {
    "email": "",
    "password": ""
  }

  message : String = '';

  constructor(private AuthService: AuthService, private router: Router) {


   }

  ngOnInit() {
  }

  login(): void {
    this.AuthService.login(this.loginData)
        .subscribe((res:any):any => {

          localStorage.setItem('jwtToken', res.data.token);
          localStorage.setItem('user',JSON.stringify(res.data.user));
          this.AuthService.announceLogin(res.data.user)
          this.router.navigate(['items']);
        }, err => {
          this.message = err.error.errors[0].detail;
        });
  }


}
