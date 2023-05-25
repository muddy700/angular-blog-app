import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, DirtyResponseEntity } from '../entities';
import { HelpersService } from '../services';

@Injectable()
export class CategoryDataService extends DefaultDataService<Category> {
  helpersService: HelpersService;

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    helpersService: HelpersService
  ) {
    super('Category', http, httpUrlGenerator);
    this.helpersService = helpersService;
  }

  override getAll(): Observable<Category[]> {
    return super
      .getAll()
      .pipe(
        map((res: any) =>
          res.data.map((item: DirtyResponseEntity) => this.mapCategory(item))
        )
      );
  }

  private mapCategory(dirtyCategory: DirtyResponseEntity): Category {
    return this.helpersService.mapEntityData(dirtyCategory) as Category;
  }
}
