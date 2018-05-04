import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  constructor() { }

  hasItem(user:string) {
    return typeof localStorage.getItem(user);
  }

  getItem (user:string) {
    return localStorage.getItem(user);
  }

  setItem(user:object) {
    return localStorage.setItem('user', JSON.stringify(user));
  }

}
