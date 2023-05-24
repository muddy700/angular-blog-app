import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable()
export class CategoryDataService extends DefaultDataService<Category> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Category', http, httpUrlGenerator);
  }

  override getAll(): Observable<Category[]> {
    return super
      .getAll()
      .pipe(
        map((res: any) => res.data.map((item: any) => this.mapCategory(item)))
      );
  }

  private mapCategory(item: any): Category {
    return { id: item.id, ...item.attributes };
  }
}
