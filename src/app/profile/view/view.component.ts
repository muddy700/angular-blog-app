import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { HelpersService } from 'src/app/shared/helpers.service';
import { User } from 'src/app/users/store/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  currentUser: User = {} as User;

  constructor(
    public authService: AuthService,
    public helpersService: HelpersService
  ) {
    this.authService.getUserProfile().subscribe((res: any) => {
      this.currentUser = res;
    });
  }

  ngOnInit() {}
}
