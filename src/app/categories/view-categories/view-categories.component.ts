import { Component, OnInit } from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Category } from '../store/category';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
})
export class ViewCategoriesComponent implements OnInit {
  categoryService: EntityCollectionService<Category>;
  allCategories$: Observable<Category[]>;

  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.categoryService = serviceFactory.create<Category>('Category');
    this.allCategories$ = this.categoryService.entities$;
  }

  ngOnInit(): void {
    this.categoryService.getAll();
  }
}
