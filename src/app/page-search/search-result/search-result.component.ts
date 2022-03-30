import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  keyword: string = '';
  searchResult: string = '';
  wordcloud: string = '';
  details: string = '';
  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      const keyword = queryParam.get('keyword');
      if (keyword) {
        this.keyword = keyword;
        this.searchService.getSearchResult(this.keyword).subscribe(res => {
          this.wordcloud = res[0].title;
          this.details = res[0].body;
        });
      }
    });
  }

  onSearch(keyword: string) {
    if (keyword) {
      // 跳转到result 界面
      this.router.navigate(['.'], {
        queryParams: { keyword },
        relativeTo: this.activatedRoute,
      });
    }
  }

  // 调用http service
  // this.searchService.getSearchResult(keword).subscribe(res => {
  //   console.log(res);
    
  // })

}
