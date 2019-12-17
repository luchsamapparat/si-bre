import { Action, createReducer, on } from '@ngrx/store';
import { spinnerEnd, spinnerStart } from './spinner.actions';

export const SPINNER_FEATURE_KEY = 'spinner';

export interface SpinnerState {
  activeSpinners: string[];
}

export interface SpinnerPartialState {
  readonly [SPINNER_FEATURE_KEY]: SpinnerState;
}

export const initialState: SpinnerState = {
  activeSpinners: []
};

const spinnerReducer = createReducer(
  initialState,
  on(spinnerStart, (state, action) => ({
      ...state,
      activeSpinners: [
        ...state.activeSpinners,
        ...action.names
      ]
  })),
  on(spinnerEnd, (state, action) => ({
      ...state,
      activeSpinners: state.activeSpinners
        .filter(spinner => !action.names.includes(spinner))
  }))
);

export function reducer(state: SpinnerState | undefined, action: Action) {
  return spinnerReducer(state, action);
}
