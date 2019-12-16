import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { filterNavigationTo } from '@si-bre/routing';
import { map } from 'rxjs/operators';

@Injectable()
export class DetailsEffects {

  loadDetails$ = createEffect(
    () => this.actions$.pipe(
      filterNavigationTo('details'),
      map(() => console.log('LOAD DETAILS'))
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
  ) { }
}
