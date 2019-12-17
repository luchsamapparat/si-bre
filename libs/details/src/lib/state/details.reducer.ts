import { Action, createReducer, on } from '@ngrx/store';
import { Details } from '../details.model';
import { detailsLoaded, navigatedToDetails } from './details.actions';

export const DETAILS_FEATURE_KEY = 'details';

export interface DetailsState {
  details: Details | null;
}

export interface DetailsPartialState {
  readonly [DETAILS_FEATURE_KEY]: DetailsState;
}

export const initialState: DetailsState = {
  details: null
};

const detailsReducer = createReducer(
  initialState,
  on(navigatedToDetails, (state) => ({
      ...state,
      details: null
  })),
  on(detailsLoaded, (state, { details }) => ({
      ...state,
      details
  }))
);

export function reducer(state: DetailsState | undefined, action: Action) {
  return detailsReducer(state, action);
}
