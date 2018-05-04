import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {User} from '../../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  data: any;
  message: string = '';
  signupData :User = {
    "username": '',
    "password": '',
    "name": '',
    "email": ''
  }
  

  constructor(private AuthService : AuthService) { }

  ngOnInit() {
  }

  signup () {
    this.AuthService.signup(this.signupData)
        .subscribe(res => {
          this.data = res;
          this.message = this.data.data['message'];
          this.signupData.username = '';
          this.signupData.password = '';
          this.signupData.name = '';
          this.signupData.email = '';
        }, err => {
          this.message = err.error.msg;
        });
  }

}
