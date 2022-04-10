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
  listResult: string[] | undefined = [];
  companyInfo: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {    
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      const keyword = queryParamMap.get('keyword');
      if (keyword) {
        this.keyword = keyword;
        this.searchService.getSearchResult(this.keyword).subscribe(res => {
          this.listResult = res[0].body.split(' ');
          this.companyInfo = res[0].body;
        });
      }
    })
  }

  onSearch(keyword: String) {
    if (keyword) {
      // 跳转到result 界面
      // this.router.navigate(['.'], {
      //   queryParams: { keyword },
      //   relativeTo: this.activatedRoute,
      // });
      this.router.navigate(['.'], { queryParams: { keyword }, relativeTo: this.activatedRoute});
    }
  }

}
