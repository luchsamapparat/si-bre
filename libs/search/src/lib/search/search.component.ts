import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Search } from '../search.model';
import { searchSubmitted } from '../state/search.actions';

@Component({
  selector: 'si-bre-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
    private store: Store<void>
  ) { }

  onSearch(search: Search) {
    this.store.dispatch(searchSubmitted({ search }));
  }

}
