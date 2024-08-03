import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) { 

  }
  getProducts():Observable<any>{
    return this.http.get<any>(this.apiURL);
  }

}
