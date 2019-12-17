import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpinnerState, SPINNER_FEATURE_KEY } from './spinner.reducer';

const selectSpinnerState = createFeatureSelector<SpinnerState>(
  SPINNER_FEATURE_KEY
);

export const selectSpinnerActive = createSelector(
  selectSpinnerState,
  (state: SpinnerState, { spinnerName }: { spinnerName: string }) => {
    console.log(state);
    console.log(spinnerName);
    return state.activeSpinners.includes(spinnerName);
  }
);
