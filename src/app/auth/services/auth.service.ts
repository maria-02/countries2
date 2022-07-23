import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string =
    'https://62db2774d1d97b9e0c4c641a.mockapi.io/api/v2';
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.get(`${this.baseUrl}/users`).pipe(tap((resp) => resp));
  }
}
