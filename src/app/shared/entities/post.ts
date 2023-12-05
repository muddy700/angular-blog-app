import { User } from './user';
import { Category } from './category';

export interface Post {
  id: string;
  title: string;
  description: string;
  author: User;
  category: Category;
  coverImage?: string;
  createdAt?: string | Date;
}
