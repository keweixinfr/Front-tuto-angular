import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import * as dict from 'src/assets/fake-data/dictionnary.json';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() defaultValue: string = '';
  @Input() placeholder: string = 'Search Ouisearch or type a url';
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  listOptions: string[] = [];
  filteredOptions!: Observable<string[]>;
  searchControl: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    console.log(this.defaultValue);
    
    const dictObj = dict;
    this.listOptions = dictObj.data;
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.defaultValue ? this.searchControl.setValue(this.defaultValue) : null;
  }

  onEnter(event: Event) {
    const target = <HTMLSelectElement> event.target
    const value = target?.value;
    this._search(value);
  }

  onOptionSelected(optionValue: string) {
    this._search(optionValue);
  }

  private _search(keyword: string) {    
    keyword && this.searchEvent.emit(keyword);
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.listOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

}
