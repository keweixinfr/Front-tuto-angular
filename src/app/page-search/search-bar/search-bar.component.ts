import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() defaultValue: string = '';
  @Input() placeholder: string = 'Search Ouisearch or type a url';
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search(event: any) {
    const keyword = event.target?.value;
    if (keyword) {
      console.log('keyword', keyword);
      this.searchEvent.emit(keyword);
    }
  }

}
