import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  onSearch(keyword: String) {
    console.log(keyword);
    if (keyword) {
      // 跳转到result 界面
      // this.router.navigate(['result'], {
      //   queryParams: { keyword },
      //   relativeTo: this.activatedRoute,
      // });
      this.router.navigate(['result'], { queryParams: { keyword }, relativeTo: this.activatedRoute});
    }
  }
}
