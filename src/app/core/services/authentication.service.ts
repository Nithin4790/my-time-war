import { ErrorMessage } from './../models/models';
import { Credential } from './../models/credentials.model';
import { CookieService } from 'ngx-cookie-service';
import { Authentication } from './../models/authentication.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getAuthToken(userCreds: any): Observable<any> {
    const url = 'http://localhost:1337/auth/local';
    return this.http.post<any>(url, {
      identifier: userCreds.payload.username,
      password: userCreds.payload.password,
    });
  }

  getToken(): string {
    return this.cookieService.get('mytime');
  }

  handleError(err: string) {
    return err;
  }
}
