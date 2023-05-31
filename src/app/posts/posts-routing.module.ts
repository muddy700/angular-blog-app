import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostDetailsComponent } from './view-post-details/view-post-details.component';

const routes: Routes = [
  {
    path: ':postId/details',
    component: ViewPostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
