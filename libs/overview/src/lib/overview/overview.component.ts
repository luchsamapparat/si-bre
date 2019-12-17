import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterAppState } from '@si-bre/routing';
import { Search } from '@si-bre/search';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'si-bre-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  queryParams$: Observable<Search>;

  constructor(
    private store: Store<RouterAppState>
  ) {
    // 💣 don't do this in production
    this.queryParams$ = this.store.select(state => state.router.state.root.queryParams).pipe(
      map(queryParams => ({
        ...queryParams,
        pnr: '123'
      } as Search))
    );
  }

}
