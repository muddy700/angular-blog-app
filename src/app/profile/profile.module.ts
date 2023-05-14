import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, ProfileRoutingModule, MaterialModule],
})
export class ProfileModule {}
