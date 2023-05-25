import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/categories/store/categories.service';
import { Category } from 'src/app/categories/store/category';
import { HelpersService } from 'src/app/shared/helpers.service';
import { Post } from 'src/app/posts/store/post';
import { PostsService } from 'src/app/posts/store/posts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  allCategories$: Observable<Category[]>;
  allPosts$: Observable<Post[]>;

  constructor(
    public categoriesService: CategoriesService,
    public helpersService: HelpersService,
    public postsService: PostsService
  ) {
    this.allCategories$ = this.categoriesService.entities$;
    this.allPosts$ = this.postsService.entities$;
  }

  ngOnInit(): void {
    this.categoriesService.getAll();
    this.postsService.getWithQuery('populate=*');
  }
}
