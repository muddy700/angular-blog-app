import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from '../shared/configurations/material.module';

@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
