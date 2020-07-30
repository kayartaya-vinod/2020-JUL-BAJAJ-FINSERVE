import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import md5 from 'md5';

import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private http: HttpClient) {
    if ('token' in window.sessionStorage) {
      this.token = window.sessionStorage.getItem('token');
    }
  }

  // a 'get' function must be used as a readonly variable.
  // a 'get' function should be a no-argument function, and must return a value
  get isUserLoggedIn() {
    return this.token !== undefined;
  }

  login(email: string, password: string): Observable<any> {
    password = md5(password);
    return this.http
      .post('http://localhost:3000/login', { email, password })
      .do(data => this.token = data['token'])
      .do(data => window.sessionStorage.setItem('token', data['token']));
  }

  logout() {
    this.token = undefined;
    delete window.sessionStorage.token;
  }
}
