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
 
  getUserAvatar(user: User): string {
    if (user.avatarUrl) return user.avatarUrl;

    let avatar = `https://ui-avatars.com/api/?background=3c77dd&size=200&bold=true&format=png&color=fff&name=${
      user.firstName ?? '--'
    }+${user.lastName ?? '--'}`;

    return avatar;
  }

  getUserGender(gender: string = '--'): string {
    if (gender === 'M') return 'Male';

    if (gender === 'F') return 'Female';

    return 'Unknown Gender';
  }
}
