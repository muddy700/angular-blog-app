import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  getUserFullName(user: User): string {
    if (user.firstName && user.lastName)
      return user.firstName + ' ' + user.lastName;

    if (user.firstName) return user.firstName;

    if (user.lastName) return user.lastName;

    return 'No user info';
  }
}
