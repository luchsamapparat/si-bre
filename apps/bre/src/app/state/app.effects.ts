import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Search, searchSubmitted } from '@si-bre/search';
import { isEmpty } from 'lodash-es';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  navigateOnSearch$ = createEffect(
    () => this.actions$.pipe(
      ofType(searchSubmitted),
      map(({ search }) => this.router.navigate(
        getRouteForSearch(search),
        { queryParams: search }
      ))
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) { }
}

const getRouteForSearch = (search: Search) => isPersonSearch(search) ? ['details'] : [''];

const isPersonSearch = (search: Search) => !isEmpty(search.pnr)
