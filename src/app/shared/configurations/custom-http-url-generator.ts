import { Injectable } from '@angular/core';
import {
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  Pluralizer,
} from '@ngrx/data';
import { environment } from 'src/environments/environment';
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

    let baseUrl: string = environment.baseUrl;
    let endpoint: string = '';
    let fullUrl: string = '';

    if (entityName == 'User') endpoint = 'users';

    if (entityName == 'Category') endpoint = 'categories';

    if (entityName == 'Post') endpoint = 'posts';

    fullUrl = baseUrl + '/' + endpoint + '/';

    resourceURLs = {
      collectionResourceUrl: fullUrl,
      entityResourceUrl: fullUrl,
    };

    this.registerHttpResourceUrls({ [entityName]: resourceURLs });

    return resourceURLs;
  }
}
