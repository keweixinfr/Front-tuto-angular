import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  private URL = "https://jsonplaceholder.typicode.com/todos/1";
  @Input() defaultValue: string = '';
  @Input() placeholder: string = 'Searche Ouisearch or type a url';

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>()
 
  constructor() { }

  ngOnInit(): void {
  }

  search(event: any) {
    console.log('event', event);
    const keyword = event.target?.value;
    console.log('keyword', keyword);
    if (keyword) {
      this.searchEvent.emit(keyword);
    }
  }
}
