import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { extractQueryParams, filterNavigationTo } from '@si-bre/routing';
import { Search } from '@si-bre/search';
import { map, switchMap } from 'rxjs/operators';
import { DetailsService } from '../details.service';
import { detailsLoaded, navigatedToDetails } from './details.actions';

@Injectable()
export class DetailsEffects {

  navigatedToDetails$ = createEffect(
    () => this.actions$.pipe(
      filterNavigationTo('details'),
      extractQueryParams<Search>(),
      map(search => navigatedToDetails({ search }))
    ),
  );

  detailsLoaded$ = createEffect(
    () => this.actions$.pipe(
      ofType(navigatedToDetails),
      map(action => (<any> action).search),
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
