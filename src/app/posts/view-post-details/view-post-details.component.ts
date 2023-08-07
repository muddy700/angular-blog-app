import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/entities';
import { HelpersService, PostsService } from 'src/app/shared/services';

@Component({
  selector: 'app-view-post-details',
  templateUrl: './view-post-details.component.html',
  styleUrls: ['./view-post-details.component.css'],
})
export class ViewPostDetailsComponent implements OnInit {
  postId: string;
  postInfo: Post | undefined;
  authorPosts: Array<Post> = [];

  constructor(
    public postsService: PostsService,
    public helpersService: HelpersService,
    public router: Router,
    private activeRoute: ActivatedRoute
  ) {
    // Initialize PostId
    this.postId = this.activeRoute.snapshot.params['postId'];

    postsService.entities$.subscribe((posts: Post[]) => {
      // Initialize PostInfo
      let result = posts.find((post: Post) => post.id == this.postId);
      if (result && result.id) this.postInfo = result;
      else this.fetchPostInfo();

      // Initialize Author Posts
      let otherPosts: Post[] = posts.filter(
        (post: Post) => post.author.id == this.postInfo?.author.id
      );

      if (otherPosts && otherPosts.length) this.authorPosts = otherPosts;
      else this.fetchAuthorPosts();
    });
  }

  ngOnInit(): void {}

  fetchPostInfo(): void {
    this.postsService
      .getByKey(this.postId)
      .subscribe((post: Post) => (this.postInfo = post));
  }

  fetchAuthorPosts(): void {
    let query: string = '';

    this.postsService
      .getWithQuery(query)
      .subscribe((posts: Post[]) => (this.authorPosts = posts));
  }
}
