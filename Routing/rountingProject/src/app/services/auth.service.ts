import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('accessToken');
    
    if (token) {
      this.tokenSubject.next(token);
    } else {
      this.tokenSubject.next(null);
    }
  }
  apiURL = 'https://dummyjson.com/auth/login';
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiURL, {
      username: username,
      password: password
    }).pipe(
      tap(response => {
        const token = response.token;
        if (token) {
          localStorage.setItem('accessToken', token);
          console.log("token",token);
          
          console.log(token);
          console.log(response);
          this.tokenSubject.next(token);
        } else {
          this.tokenSubject.next(null);
        }
      })
    )
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject;
  }
  isAuthenticated(): boolean {
    const token = this.tokenSubject.value;
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  logOut(): void {
    localStorage.removeItem('accessToken');
    this.tokenSubject.next(null);
  }

}
