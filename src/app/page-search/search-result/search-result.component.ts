import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  keyword: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      const keyword = queryParamMap.get('keyword');
      if (keyword) {
        this.keyword = keyword;
      }
    })
  }

  onSearch(keyword: String) {
    this.router.navigate(['.'], { queryParams: { keyword }, relativeTo: this.activatedRoute});
  }

}
