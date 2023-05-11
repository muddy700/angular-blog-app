import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  getUserFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }
}
