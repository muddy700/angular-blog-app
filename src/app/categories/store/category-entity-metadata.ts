import { EntityMetadataMap } from '@ngrx/data';
import { Category } from './category';

export const CategoryEntityMetaData: EntityMetadataMap = {
  Category: {
    selectId: (category: Category) => category.id,
  },
};
