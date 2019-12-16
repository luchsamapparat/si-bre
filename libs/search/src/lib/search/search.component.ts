import { Component } from '@angular/core';
import { Search } from './search.model';

@Component({
  selector: 'si-bre-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }

  onSearch(search: Search) {
    console.log(search);
  }

}
