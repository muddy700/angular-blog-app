import { EntityMetadataMap } from '@ngrx/data';
import { User } from './user';

export const userEntityMetaData: EntityMetadataMap = {
  User: {
    selectId: (user: User) => user.id,
  },
};
