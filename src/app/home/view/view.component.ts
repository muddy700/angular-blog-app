import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/categories/store/category';
import { HelpersService } from 'src/app/shared/helpers.service';
import { Post } from 'src/app/shared/post';
import { User } from 'src/app/users/store/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor(public helperService: HelpersService) {}

  // Author Info
  authorInfo: User = {
    id: '1',
    firstName: 'Robert',
    lastName: 'Maganga',
    email: 'robert@gmail.com',
    phoneNumber: '0789101112',
    gender: 'M',
    avatarUrl:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80',
    createdAt: 'string',
  } as User;

  // Post Categories
  postCategories: Array<Category> = [
    { id: '1', name: 'Sports', description: 'For sports' },
    { id: '2', name: 'Busioness', description: 'For business' },
    { id: '3', name: 'Busioness1', description: 'For business' },
    { id: '4', name: 'Busioness2', description: 'For business' },
    { id: '4', name: 'Busioness3', description: 'For business' },
    { id: '5', name: 'Busioness4', description: 'For business' },
    { id: '6', name: 'Busioness5', description: 'For business' },
  ];

  // Category Info
  categoryInfo: Category = this.postCategories[0];

  // Blog Posts
  blogPosts: Array<Post> = [
    {
      id: '1',
      title: 'First title',
      description: 'For sports',
      author: this.authorInfo,
      category: this.categoryInfo,
      coverImage:
        'https://images.unsplash.com/photo-1682547095120-f8946d88197a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'First title',
      description: 'For sports',
      author: this.authorInfo,
      category: this.categoryInfo,
      coverImage:
        'https://images.unsplash.com/photo-1682547095120-f8946d88197a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      createdAt: new Date(),
    },
    {
      id: '3',
      title: 'First title',
      description: 'For sports',
      author: this.authorInfo,
      category: this.categoryInfo,
      coverImage:
        'https://images.unsplash.com/photo-1682547095120-f8946d88197a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      createdAt: new Date(),
    },
    {
      id: '4',
      title: 'First title',
      description: 'For sports',
      author: this.authorInfo,
      category: this.categoryInfo,
      coverImage:
        'https://images.unsplash.com/photo-1682547095120-f8946d88197a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      createdAt: new Date(),
    },
  ];

  ngOnInit(): void {}
}
