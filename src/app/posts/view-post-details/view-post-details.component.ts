import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/entities';
import { HelpersService, PostsService } from 'src/app/shared/services';

@Component({
  selector: 'app-view-post-details',
  templateUrl: './view-post-details.component.html',
  styleUrls: ['./view-post-details.component.css'],
})
export class ViewPostDetailsComponent implements OnInit, OnDestroy {
  postId: string;
  authorId: string;
  postInfo?: Post;
  authorPosts: Array<Post> = [];
  subscriptions: Subscription[] = [];

  constructor(
    public postsService: PostsService,
    public helpersService: HelpersService,
    private activeRoute: ActivatedRoute
  ) {
    // Get path parameters.
    this.postId = this.activeRoute.snapshot.params['postId'];
    this.authorId = this.activeRoute.snapshot.params['authorId'];
  }

  ngOnInit(): void {
    this.fetchAuthorPosts();
  }

  fetchAuthorPosts(): void {
    let request: Subscription = this.postsService
      .getWithQuery('&filters[author][id][$eq]=' + this.authorId)
      .subscribe((posts: Post[]) => {
        // Get Active Post Info.
        this.patchActivePostInfo(posts);

        // Remove Active Post from the list and take two posts for sample.
        this.prepareOtherAuthorPosts(posts);
      });

    this.subscriptions.push(request);
  }

  patchActivePostInfo(postsList: Post[]): void {
    let data: Post | any = postsList.find(({ id }: Post) => id == this.postId);

    if (data) this.postInfo = data;
  }

  prepareOtherAuthorPosts(postsList: Post[]): void {
    let otherPosts: Post[] = [];

    // Remove Active Post from the list.
    otherPosts = postsList.filter(({ id }: Post) => id != this.postId);

    // Take only the first two elements/posts.
    if (otherPosts.length > 2) this.authorPosts = otherPosts.slice(0, 2);
    else if (otherPosts.length) this.authorPosts = otherPosts;
  }

  refreshPage(): void {
    location.reload();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((req: Subscription) => req.unsubscribe);
  }
}
