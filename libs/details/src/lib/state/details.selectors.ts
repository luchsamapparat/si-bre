import { createFeatureSelector } from '@ngrx/store';
import { DetailsState, DETAILS_FEATURE_KEY } from './details.reducer';

const getDetailsState = createFeatureSelector<DetailsState>(
  DETAILS_FEATURE_KEY
);
