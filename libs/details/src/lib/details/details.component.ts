import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Details } from '../details.model';
import { DetailsPartialState } from '../state/details.reducer';
import { selectDetals } from '../state/details.selectors';

@Component({
  selector: 'si-bre-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  details: Observable<Details>;

  constructor(
    private store: Store<DetailsPartialState>
  ) {
    this.details = this.store.select(selectDetals);
  }

}
