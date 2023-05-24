import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../store/category';
import { CategoriesService } from '../store/categories.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
})
export class ViewCategoriesComponent implements OnInit {
  loading$: Observable<boolean>;
  allCategories$: Observable<Category[]>;

  constructor(public categoriesService: CategoriesService) {
    this.loading$ = this.categoriesService.loading$;
    this.allCategories$ = this.categoriesService.entities$;
  }

  ngOnInit(): void {
    this.categoriesService.getAll();
  }
}
