import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/entities/category';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { Post } from 'src/app/shared/entities/post';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit, OnDestroy {
  activeCategoryId: string = '';
  subscriptions: Subscription[] = [];
  allCategories$: Observable<Category[]>;

  allPosts: Post[] = [];
  isFetchingPosts$: Observable<Boolean>;
  isFetchingCategories$: Observable<Boolean>;

  constructor(
    public categoriesService: CategoriesService,
    public helpersService: HelpersService,
    public postsService: PostsService
  ) {
    this.isFetchingPosts$ = this.postsService.loading$;
    this.allCategories$ = this.categoriesService.entities$;
    this.isFetchingCategories$ = this.categoriesService.loading$;
  }

  ngOnInit(): void {
    this.fetchPosts();
    this.categoriesService.getAll();
  }

  fetchPosts(): void {
    let request: Subscription = this.postsService
      .getWithQuery('')
      .subscribe((posts: Post[]) => (this.allPosts = posts));

    this.subscriptions.push(request);
  }

  filterPostsByCategory(categoryId: string): void {
    this.activeCategoryId = categoryId;

    let request: Subscription = this.postsService
      .getWithQuery('&filters[category][id][$eq]=' + categoryId)
      .subscribe((posts: Post[]) => (this.allPosts = posts));

    this.subscriptions.push(request);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((req: Subscription) => req.unsubscribe);
  }
}
