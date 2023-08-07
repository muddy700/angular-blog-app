import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
export class ViewComponent implements OnInit {
  allCategories$: Observable<Category[]>;
  allPosts$: Observable<Post[]>;
  isFetchingCategories$: Observable<Boolean>;

  constructor(
    public categoriesService: CategoriesService,
    public helpersService: HelpersService,
    public postsService: PostsService
  ) {
    this.allCategories$ = this.categoriesService.entities$;
    this.allPosts$ = this.postsService.entities$;
    this.isFetchingCategories$ = this.categoriesService.loading$;
  }

  ngOnInit(): void {
    this.categoriesService.getAll();
    this.postsService.getWithQuery('');
  }
}
