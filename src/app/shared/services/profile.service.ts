import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError } from 'rxjs';
import { HelpersService } from './helpers.service';
import { User } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl: string = environment.baseUrl;
  headers: HttpHeaders = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );

  constructor(
    private http: HttpClient,
    public helpersService: HelpersService
  ) {}

  updateUser(payload: User, userId: number): Observable<any> {
    let userUpdateApi = `${this.baseUrl}/users/${userId}`;

    return this.http
      .put(userUpdateApi, payload, { headers: this.headers })
      .pipe(catchError(this.helpersService.handleError));
  }
}
