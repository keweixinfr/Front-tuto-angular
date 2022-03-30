import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSearchRoutingModule } from './page-search-routing.module';

import {SearchComponent} from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchService } from './search.service';

import {MatTabsModule} from '@angular/material/tabs';
import { WordCloudComponent } from './word-cloud/word-cloud.component';

@NgModule({
  providers: [SearchService],
  declarations: [SearchComponent, SearchBarComponent, SearchResultComponent, WordCloudComponent], // 内部的组件
  imports: [
    CommonModule,
    PageSearchRoutingModule,
    MatTabsModule
  ]
})
export class PageSearchModule { }
