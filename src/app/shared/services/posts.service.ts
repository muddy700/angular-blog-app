import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Post } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends EntityCollectionServiceBase<Post> {
  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Post', elementsFactory);
  }

  //  Your codes here
}
