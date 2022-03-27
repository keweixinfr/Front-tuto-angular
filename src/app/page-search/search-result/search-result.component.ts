import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResult } from 'src/models/search-result';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  keyword: string = '';
  listResult: SearchResult[] | undefined = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {    
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      const keyword = queryParamMap.get('keyword');
      if (keyword) {
        this.keyword = keyword;
        this.searchService.getSearchResult(this.keyword).subscribe(res => {
          this.listResult = undefined;
        });
      }
    })
  }

  onSearch(keyword: String) {
    this.router.navigate(['.'], { queryParams: { keyword }, relativeTo: this.activatedRoute});
  }

}
