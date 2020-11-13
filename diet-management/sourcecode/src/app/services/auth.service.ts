import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:3000/api';
  public isAuthenticated: boolean = false;
  public isLoggedIn:Subject<boolean> = new Subject<boolean>()

  constructor(private http:HttpClient) { }

  register(user) {
    return this.http.post(`${this.API_URL}/register`, user);
  }

  changeLoginStatus(isLoggedIn: boolean) {
    this.isAuthenticated = isLoggedIn;
    this.isLoggedIn.next(isLoggedIn);
  }

  loginUser(userData) {
    return this.http.post(`${this.API_URL}/login`, userData);
  }

  isAuth() {
    return this.isAuthenticated;
  }


  doLogout() {
    this.changeLoginStatus(false);
  }
}
