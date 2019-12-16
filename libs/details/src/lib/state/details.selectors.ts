import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailsState, DETAILS_FEATURE_KEY } from './details.reducer';

const selectDetailsState = createFeatureSelector<DetailsState>(
  DETAILS_FEATURE_KEY
);

export const selectDetals = createSelector(
  selectDetailsState,
  state => state.details
);
