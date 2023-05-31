import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ViewPostDetailsComponent } from './view-post-details/view-post-details.component';


@NgModule({
  declarations: [
    ViewPostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
