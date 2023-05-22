import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { EntityDefinitionService } from '@ngrx/data';
import { CategoryEntityMetaData } from './store/category-entity-metadata';

@NgModule({
  declarations: [ViewCategoriesComponent],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(CategoryEntityMetaData);
  }
}
