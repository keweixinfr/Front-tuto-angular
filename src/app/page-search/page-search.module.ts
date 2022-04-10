import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageSearchRoutingModule } from './page-search-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search/search.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    SearchResultComponent,
    SearchBarComponent,
    SearchComponent,
    WordCloudComponent,
  ],
  imports: [
    CommonModule,
    PageSearchRoutingModule,
    MatTabsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
})
export class PageSearchModule {}
