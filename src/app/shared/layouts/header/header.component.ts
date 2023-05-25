import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  doLogOut(): void {
    this.authService.logOut();
  }
}
