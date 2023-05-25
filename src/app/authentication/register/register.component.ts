import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/entities/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      password: [''],
      gender: [''],
    });
  }

  ngOnInit() {}

  registerUser() {
    if (this.signupForm.invalid) {
      console.log('Form Is Invalid');
    } else {
      // Organize Payload
      const payload: User = this.signupForm.value;

      // payload.confirmed = false;
      payload.username = payload.email;
      payload.name = this.getUserFullName(payload);

      this.authService.signUp(payload).subscribe((res: any) => {
        if (res.jwt && res.user.id) {
          // Clear Form
          this.signupForm.reset();

          // Take User To Login Page
          this.router.navigate(['auth/login']);
        }
      });
    }
  }

  getUserFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }
}
