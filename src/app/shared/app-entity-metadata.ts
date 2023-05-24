import { EntityMetadataMap } from '@ngrx/data';
import { Category } from '../categories/store/category';
import { Post } from './post';

export const AppEntityMetaData: EntityMetadataMap = {
  Category: {
    selectId: (category: Category) => category.id,
  },
  Post: {
    selectId: (post: Post) => post.id,
  },
};
