import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SearchResult } from 'src/models/search-result';
import { ApiCallService } from 'src/services/api-call.service';



@Injectable({
  providedIn: 'root',
})
export class SearchService {
  lastResult: SearchResult[] = [];
  constructor(private apiCallService: ApiCallService) {}

  getSearchResult(keyword: string): Observable<SearchResult[]> {
    return this.apiCallService.get('/posts').pipe(tap(res => {
      this.lastResult = res;
    }));
  }
}
