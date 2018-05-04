import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import {Subject } from 'rxjs/Subject';
import { User } from '../user';
import { Auth } from '../auth';
import { catchError, map, tap, } from 'rxjs/operators';


@Injectable()
export class AuthService {
  private http: HttpClient;
  loginEndpoint = 'http://localhost:3000/api/users/authenticate';
  signupEndpoint = 'http://localhost:3000/api/users';
  signupData: any;
  loginData: any;
  private loggedIn = false;

  private authAnnouncerSource = new Subject<object|null>();

  authAnnouncer$ = this.authAnnouncerSource.asObservable()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(http: HttpClient) {
    this.http = http;
    if (localStorage.getItem('user')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login (loginData ): Observable<{} | Auth>{
    this.loggedIn = true;
    return this.http.post<Auth>(this.loginEndpoint,JSON.stringify(loginData), this.httpOptions) 
  }

  signup (signupData): Observable<{} | User> {
    return this.http.post<User>(this.signupEndpoint, JSON.stringify(signupData), this.httpOptions)
       .pipe(
         tap(data => console.log(`${data} user created`)),
         catchError(this.handleError('signup', {}))
       )

  }

  announceLogin(user) {
    return this.authAnnouncerSource.next(user);
  }

  logOut () {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    this.announceLogin(null)
  }

}
