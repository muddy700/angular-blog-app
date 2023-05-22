import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
