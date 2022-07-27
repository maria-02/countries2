import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { DataLogin, User } from '../interface/users.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https:62df0ef5976ae7460be74058.mockapi.io/api/v1';
  constructor(private http: HttpClient) {}

  login(data: any) {
    console.table(data);
    return this.http
      .get<User[]>(`${this.baseUrl}/users`)
      .pipe(tap((resp) => resp[1]));
  }
}
