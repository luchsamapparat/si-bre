import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpinnerPartialState } from '../state/spinner.reducer';
import { selectSpinnerActive } from '../state/spinner.selectors';

@Component({
  selector: 'si-bre-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isActive$: Observable<boolean>;

  @Input()
  spinnerName: string;

  constructor(
    private store: Store<SpinnerPartialState>
  ) {}

  ngOnInit() {
    this.isActive$ = this.isActive$ = this.store.select(selectSpinnerActive, {
      spinnerName: this.spinnerName
    });
  }
}
