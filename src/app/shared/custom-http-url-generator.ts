import { Injectable } from '@angular/core';
import {
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  Pluralizer,
} from '@ngrx/data';
@Injectable()
export class CustomHttpUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
  }

  protected override getResourceUrls(
    entityName: string,
    root: string,
    trailingSlashEndpoints?: boolean
  ): HttpResourceUrls {
    let resourceURLs = this.knownHttpResourceUrls[entityName];

    if (entityName == 'User') {
      resourceURLs = {
        collectionResourceUrl: 'http://localhost:1337/api/users/',
        entityResourceUrl: 'http://localhost:1337/api/users/',
      };

      this.registerHttpResourceUrls({ [entityName]: resourceURLs });
    }

    if (entityName == 'Category') {
      resourceURLs = {
        collectionResourceUrl: 'http://localhost:1337/api/categories/',
        entityResourceUrl: 'http://localhost:1337/api/categories/',
      };

      this.registerHttpResourceUrls({ [entityName]: resourceURLs });
    }

    if (entityName == 'Post') {
      resourceURLs = {
        collectionResourceUrl: 'http://localhost:1337/api/posts/',
        entityResourceUrl: 'http://localhost:1337/api/posts/',
      };

      this.registerHttpResourceUrls({ [entityName]: resourceURLs });
    }

    return resourceURLs;
  }
}
