import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // private URL = 'https://jsonplaceholder.typicode.com/todos/1';
  // searchResult: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  onSearch(keyword: String) {
    this.router.navigate(['result'], { queryParams: { keyword }, relativeTo: this.activatedRoute});
  }
}
