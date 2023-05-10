import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = {};
  baseUrl: string = environment.baseUrl;
  headers: HttpHeaders = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );

  constructor(private http: HttpClient, public router: Router) {}

  // Sign-up
  signUp(payload: User): Observable<any> {
    let registrationApi = `${this.baseUrl}/auth/local/register`;

    return this.http
      .post(registrationApi, payload, { headers: { skipAuth: 'true' } })
      .pipe(catchError(this.handleError));
  }

  // Sign-in
  signIn(payload: { identifier: string; password: string }) {
    return this.http
      .post<any>(`${this.baseUrl}/auth/local`, payload, {
        headers: { skipAuth: 'true' },
      })
      .subscribe((res: any) => {
        const { jwt, user } = res;
        localStorage.setItem('access_token', jwt);

        this.currentUser = user;
        this.router.navigate(['']);
      });
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    return this.getToken() !== null ? true : false;
  }

  // Logout
  logOut(): void {
    let removeToken = localStorage.removeItem('access_token');

    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // Error Handling
  handleError(error: HttpErrorResponse) {
    let msg = '';

    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\n Message: ${error.message}`;
    }

    return throwError(() => new Error(msg));
  }
}
