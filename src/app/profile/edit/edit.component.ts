import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { HelpersService } from 'src/app/shared/helpers.service';
import { User } from 'src/app/shared/user';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userId: number = 0;
  userForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public profileService: ProfileService,
    public router: Router,
    private activeRoute: ActivatedRoute,
    public helpersService: HelpersService
  ) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      gender: [''],
      avatarUrl: [''],
    });
  }

  ngOnInit() {
    this.userId = Number(this.activeRoute.snapshot.params['id']);

    this.authService.getUserById(this.userId).subscribe((res: any) => {
      const { firstName, lastName, email, phoneNumber, gender, avatarUrl } =
        res;

      this.userForm.setValue({
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
        avatarUrl,
      });
    });
  }

  updateUserInfo() {
    if (this.userForm.invalid) {
      console.log('Form Is Invalid');
    } else {
      // Organize Payload
      const payload: User = this.userForm.value;

      payload.username = payload.email;
      payload.name = this.helpersService.getUserFullName(payload);

      this.profileService
        .updateUser(payload, this.userId)
        .subscribe((res: any) => {
          if (res?.id) {
            // Clear Form
            this.userForm.reset();

            // Take User To Profile Page
            this.router.navigate(['user-profile/me']);
          }
        });
    }
  }
}
