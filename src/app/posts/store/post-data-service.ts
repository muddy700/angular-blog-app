import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';
import { User } from 'src/app/users/store/user';
import { HttpOptions } from '@ngrx/data/src/dataservices/interfaces';
import { Category } from 'src/app/categories/store/category';
import { HelpersService } from 'src/app/shared/helpers.service';
import { DirtyResponseEntity } from 'src/app/shared/dirty-response-entity';

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
      .getWithQuery(queryParams)
      .pipe(
        map((res: any) =>
          res.data.map((item: DirtyResponseEntity) => this.mapPost(item))
        )
      );
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
