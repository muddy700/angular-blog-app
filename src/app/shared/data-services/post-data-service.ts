import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/entities/user';
import { HttpOptions } from '@ngrx/data/src/dataservices/interfaces';
import { HelpersService } from '../services';
import { Category, DirtyResponseEntity, Post } from '../entities';

@Injectable()
export class PostDataService extends DefaultDataService<Post> {
  helpersService: HelpersService;

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    helpersService: HelpersService
  ) {
    super('Post', http, httpUrlGenerator);

    this.helpersService = helpersService;
  }

  override getWithQuery(
    queryParams: string | QueryParams | undefined,
    options?: HttpOptions | undefined
  ): Observable<Post[]> {
    return super
      .getWithQuery('populate=*' + queryParams)
      .pipe(
        map((res: any) =>
          res.data.map((item: DirtyResponseEntity) => this.mapPost(item))
        )
      );
  }

  override getById(
    key: string | number,
    options?: HttpOptions | undefined
  ): Observable<Post> {
    return super
      .getById(key + '/?populate=*')
      .pipe(map((res: any) => this.mapPost(res.data)));
  }

  private mapPost(dirtyPost: DirtyResponseEntity): Post {
    let post: Post = this.helpersService.mapEntityData(dirtyPost) as Post;

    post.author = this.mapAuthor(post.author);
    post.category = this.mapCategory(post.category);

    return post;
  }

  private mapAuthor(dirtyUser: any): User {
    let author: User = this.helpersService.mapEntityData(
      dirtyUser.data
    ) as User;

    return author;
  }

  private mapCategory(dirtyCategory: any): Category {
    let category: Category = this.helpersService.mapEntityData(
      dirtyCategory.data
    ) as Category;

    return category;
  }
}
