import { InjectionToken } from '@angular/core';
import { Action, ActionCreator } from '@ngrx/store';
import { flatten, uniq } from 'lodash-es';

export const SPINNER_CONFIG = new InjectionToken('SPINNER_CONFIG');

export interface SpinnerConfig {
  [spinnerName: string]: {
    startActions: ActionCreator[];
    endActions: ActionCreator[];
  }
}

export function getSpinnerNamesForAction(
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

export function getActions(type: 'startActions' | 'endActions', spinnerConfigs: SpinnerConfig[]) {
  return uniq(spinnerConfigs
    .reduce(
      (actions, spinnerConfig) => [
        ...actions,
        ...getActionsFromSpinnerConfig(type, spinnerConfig)
      ],
      []
    ))
}

export function getActionsFromSpinnerConfig(type: 'startActions' | 'endActions', spinnerConfig: SpinnerConfig) {
  return flatten(Object.values(spinnerConfig)
    .map(config => config[type]))
}
