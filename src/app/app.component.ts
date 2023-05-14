import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'blog-app-frontend';

  constructor(public authService: AuthService) {}

  doLogOut(): void {
    this.authService.logOut();
  }
}
