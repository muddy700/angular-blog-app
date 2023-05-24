import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';

@NgModule({
  declarations: [ViewCategoriesComponent],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {
  constructor() {}
}
