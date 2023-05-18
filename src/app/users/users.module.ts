import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

@NgModule({
  declarations: [ViewAllUsersComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {
}
