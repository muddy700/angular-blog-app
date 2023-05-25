import { EntityMetadataMap } from '@ngrx/data';
import { Category } from './category';
import { Post } from './post';
import { User } from './user';

export const AppEntityMetaData: EntityMetadataMap = {
  Category: {
    selectId: (category: Category) => category.id,
  },
  Post: {
    selectId: (post: Post) => post.id,
  },
  User: {
    selectId: (user: User) => user.id,
  },
};
