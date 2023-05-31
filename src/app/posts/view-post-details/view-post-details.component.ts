import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/entities';
import { PostsService } from 'src/app/shared/services';

@Component({
  selector: 'app-view-post-details',
  templateUrl: './view-post-details.component.html',
  styleUrls: ['./view-post-details.component.css'],
})
export class ViewPostDetailsComponent implements OnInit {
  postInfo: Post | undefined;

  constructor(
    public postsService: PostsService,
    public router: Router,
    private activeRoute: ActivatedRoute
  ) {
    let postId: string = this.activeRoute.snapshot.params['postId'];

    postsService.entities$.subscribe((posts: Post[]) => {
      let result = posts.find((post: Post) => post.id == postId);

      if (result && result.id) {
        this.postInfo = result;
      }
    });
  }

  ngOnInit(): void {}
}
