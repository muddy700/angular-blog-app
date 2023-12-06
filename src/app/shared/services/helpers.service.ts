import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { DirtyResponseEntity, User } from '../entities';
import { environment } from 'src/environments/environment';

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

    let avatar: string = `https://ui-avatars.com/api/?background=3c77dd&size=200&bold=true&format=png&color=fff&name=${
      user.firstName ?? '--'
    }+${user.lastName ?? '--'}`;

    return avatar;
  }

  getUserGender(gender: string = '--'): string {
    if (gender === 'M') return 'Male';

    if (gender === 'F') return 'Female';

    return 'Unknown Gender';
  }

  mapEntityData(item: DirtyResponseEntity): object {
    if (item.id) return { id: item.id, ...item.attributes };

    return {};
  }

  getImagePlaceholder(): string {
    let imagePlaceholder: string = environment.imagePlaceholder;

    return imagePlaceholder;
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

  /**
   * Print data to the console
   *
   * @param data
   * @param message
   * @param clearConsole
   */
  log(data?: any, message?: string, clearConsole: boolean = true): void {
    // Clear Conosle
    if (clearConsole) console.clear();

    // Console Title
    console.log('<========== Attention ==========>');

    // Execution
    if (message && data) {
      console.log(message, data);
    } else if (message) console.log(message);
    else if (data) console.log(data);
    else console.log('=====> Nothing to Log.');
  }

  encodeData(payload: any): string {
    return btoa(JSON.stringify(payload));
  }

  decodeData(payload: string): any {
    return JSON.parse(atob(payload));
  }
}
