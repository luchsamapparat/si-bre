import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { flatten } from 'lodash-es';
import { map } from 'rxjs/operators';
import { SpinnerConfig, SPINNER_CONFIG } from '../spinner/spinner-config.model';
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

function getSpinnerNamesForAction(
  type: 'startActions' | 'endActions',
  spinnerConfigs: SpinnerConfig[],
  action: Action
): string[] {
  return spinnerConfigs.reduce(
    (spinnerNames, spinnerConfig) => {
      let names = [];

      Object.keys(spinnerConfig)
        .forEach(spinnerName => {
          const actions = spinnerConfig[spinnerName][type]
            .map(actionCreator => actionCreator.type);

          if (actions.includes(action.type)) {
            names = [...names, spinnerName];
          }
        });

      return [
        ...spinnerNames,
        ...names
      ];
    },
    [] as string[]
  );
}

function getActions(type: 'startActions' | 'endActions', spinnerConfigs: SpinnerConfig[]) {
  return spinnerConfigs.reduce(
    (actions, spinnerConfig) => [
      ...actions,
      ...getActionsFromSpinnerConfig(type, spinnerConfig)
    ],
    []
  )
}

function getActionsFromSpinnerConfig(type: 'startActions' | 'endActions', spinnerConfig: SpinnerConfig) {
  return flatten(Object.values(spinnerConfig)
    .map(config => config[type]))
}
