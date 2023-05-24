import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends EntityCollectionServiceBase<Category> {
  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Category', elementsFactory);
  }

  //  Your codes here
  appName(): string {
    let appName: string = 'Blog App Frontend';

    return appName;
  }
}
