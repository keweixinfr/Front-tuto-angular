import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSearchRoutingModule } from './page-search-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search/search.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [SearchResultComponent, SearchBarComponent, SearchComponent],
  imports: [CommonModule, PageSearchRoutingModule, MatTabsModule],
})
export class PageSearchModule {}