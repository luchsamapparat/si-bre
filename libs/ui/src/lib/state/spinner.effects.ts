import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getActions, getSpinnerNamesForAction, SpinnerConfig, SPINNER_CONFIG } from '../spinner/spinner-config';
import { spinnerEnd, spinnerStart } from './spinner.actions';

@Injectable()
export class SpinnerEffects {

  spinnerStart$ = createEffect(
    () => this.actions$.pipe(
      ofType(...getActions('startActions', this.spinnerConfigs)),
      map((action: Action) => spinnerStart({
        names: getSpinnerNamesForAction('startActions', this.spinnerConfigs, action)
      }))
    )
  );

  spinnerEnd$ = createEffect(
    () => this.actions$.pipe(
      ofType(...getActions('endActions', this.spinnerConfigs)),
      map((action: Action) => spinnerEnd({
        names: getSpinnerNamesForAction('endActions', this.spinnerConfigs, action)
      }))
    )
  );

  constructor(
    private actions$: Actions,
    @Inject(SPINNER_CONFIG) private spinnerConfigs: SpinnerConfig[]
  ) {}
}
