import { createAction } from '@ngrx/store';
import { SpinnerConfig } from '../../lib/spinner/spinner-config';

export const fooStartAction = createAction('fooStart');
export const fooEndAction = createAction('fooEnd');
export const barStartAction = createAction('barStart');
export const barEndAction = createAction('barEnd');
export const bazStartAction = createAction('bazStart');

export const spinnerConfig1: SpinnerConfig = {
  foo: {
    startActions: [fooStartAction],
    endActions: []
  },
  bar: {
    startActions: [barStartAction],
    endActions: [barEndAction]
  }
};
export const spinnerConfig2: SpinnerConfig = {
  foo: {
    startActions: [],
    endActions: [fooEndAction]
  },
  baz: {
    startActions: [fooStartAction, bazStartAction],
    endActions: []
  }
};
export const spinnerConfigs = [spinnerConfig1, spinnerConfig2];
