import { Authentication } from './../models/authentication.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getAuthToken(): Observable<Authentication> {
    const url = 'http://localhost:1337/auth/local';

    return this.http.post<any>(url, {
      identifier: 'nkuruba',
      password: 'password',
    });
  }
}
