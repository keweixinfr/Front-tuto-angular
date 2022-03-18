import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private URL = "https://jsonplaceholder.typicode.com/todos/1";
  searchResult: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  search(event: any) {
    console.log('event', event);
    const keyword = event.target?.value;
    console.log('keyword', keyword);
    if (keyword) {
      fetch(this.URL)
        .then((response) => response.json())
        .then((data) => {
          const result = data.title;
          this.searchResult = result;
        });
    }
  }

}
