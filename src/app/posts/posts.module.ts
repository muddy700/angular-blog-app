import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ViewPostDetailsComponent } from './view-post-details/view-post-details.component';
import { MaterialModule } from '../shared/configurations';


@NgModule({
  declarations: [ViewPostDetailsComponent],
  imports: [CommonModule, PostsRoutingModule, MaterialModule],
})
export class PostsModule {}
