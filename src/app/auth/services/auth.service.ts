import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { tap } from 'rxjs';
import { DataLogin, User, LoginResp } from '../interface/users.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth!: LoginResp;

  private baseUrl: string = 'https://fake-login-api-production.up.railway.app';

  constructor(private http: HttpClient) {
    console.log(localStorage);
  }

  setAuth(auth: LoginResp) {
    this.auth = auth;
  }
  getAuth() {
    return this.auth;
  }

  login(data: DataLogin) {
    console.table(data);
    return this.http.post<LoginResp>(`${this.baseUrl}/api/auth/login`, data);
  }

  saveLogin(auth: LoginResp) {
    localStorage.setItem('login', JSON.stringify(auth));
  }

  getLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  deleteLocalStorage(key: string) {
    localStorage.removeItem(key);
  }
}
