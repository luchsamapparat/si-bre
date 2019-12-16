import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { extractQueryParams, filterNavigationTo } from '@si-bre/routing';
import { Search } from '@si-bre/search';
import { map, switchMap } from 'rxjs/operators';
import { DetailsService } from '../details.service';
import { detailsLoaded } from './details.actions';

@Injectable()
export class DetailsEffects {

  loadDetails$ = createEffect(
    () => this.actions$.pipe(
      filterNavigationTo('details'),
      extractQueryParams<Search>(),
      switchMap(({ pnr }) => this.detailsService.load(pnr).pipe(
        map(details => detailsLoaded({ details }))
      ))
    ),
  );

  constructor(
    private actions$: Actions,
    private detailsService: DetailsService
  ) { }
}
