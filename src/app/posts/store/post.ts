import { User } from '../../users/store/user';
import { Category } from '../../categories/store/category';

export interface Post {
  id: string;
  title: string;
  description: string;
  author: User;
  category: Category;
  coverImage: string;
  createdAt?: string | Date;
}
