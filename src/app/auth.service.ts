import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(http: HttpClient) {
    this.http = http;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login (loginData ): Observable<{} | Auth>{
    return this.http.post<Auth>(this.loginEndpoint,JSON.stringify(loginData), this.httpOptions)
      .pipe(
        tap(data => console.log(`${data} autheticated`)),
        catchError(this.handleError('login', {}))
      );
  }

  signup (signupData) {
    console.log(signupData)
    return this.http.post<User>(this.signupEndpoint, JSON.stringify(signupData), this.httpOptions)
       .pipe(
         tap(data => console.log(`${data} user created`)),
         catchError(this.handleError('signup', {}))
       )

  }
 
}
