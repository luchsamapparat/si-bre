import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { filterNavigationTo } from '@si-bre/routing';
import { map } from 'rxjs/operators';

@Injectable()
export class OverviewEffects {

  loadOverview$ = createEffect(
    () => this.actions$.pipe(
      filterNavigationTo('overview'),
      map(() => console.log('LOAD OVERVIEW'))
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
  ) { }
}
