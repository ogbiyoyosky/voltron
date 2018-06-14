import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from '../item';
import { catchError, map, tap, } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ItemService {
  private http: HttpClient;
  itemsEndpoint = 'http://localhost:3000/api/items';


  constructor(http: HttpClient) {
    this.http = http;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getItems (): Observable<{} | Item[]> {
    return this.http.get<Item[]>(`${this.itemsEndpoint}`)
      .pipe(
        tap(items => console.log(`${items['result'].length} items fetched`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getItem (id: string): Observable<{}|Item> {
    const url = `${this.itemsEndpoint}/${id}`;
    return this.http.get<Item>(url)
    .pipe(
      tap(item => console.log(`item fetched with id of ${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`)
    ));
  }
 
}  
