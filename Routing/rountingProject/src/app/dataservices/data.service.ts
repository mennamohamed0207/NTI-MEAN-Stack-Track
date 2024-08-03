import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  private apiUrl = 'https://dummyjson.com/products';
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  private apiPostURL='https://dummyjson.com/posts/add';
  addProduct(product: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.apiPostURL, product, { headers });
  }
}
