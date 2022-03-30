import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SearchResult } from 'src/models/search-result';
import { ApiCallService } from '../services/api-call.service'; 

@Injectable()
export class SearchService {
  lastTitle: string = '';
  lastBody: string = '';
  constructor(private apiCall: ApiCallService) { }

  getSearchResult(keyword: string): Observable<SearchResult[]> {
    return this.apiCall.get('/posts').pipe(tap(res => {
      console.log('res in service', res);
      this.lastTitle = res[0].title;
      this.lastBody = res[0].body;
    }))
  }
}
