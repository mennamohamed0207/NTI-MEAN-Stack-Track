import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'https://dummyjson.com/products';
  postURL='https://dummyjson.com/posts/add'
  constructor(private http: HttpClient) { 

  }
  getProducts():Observable<any>{
    return this.http.get<any>(this.apiURL);
  }
  addProduct(product: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.postURL, product, { headers });
  }

}
