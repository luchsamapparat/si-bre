import { Action, createReducer } from '@ngrx/store';

export const DETAILS_FEATURE_KEY = 'details';

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface DetailsState {
}

export interface DetailsPartialState {
  readonly [DETAILS_FEATURE_KEY]: DetailsState;
}

export const initialState: DetailsState = {
};

const orderReducer = createReducer(
  initialState,
  // on(checkoutOrderSuccess, (state) => ({
  //     ...state,
  //     isCheckingOut: false,
  //     items: []
  // }))
);

export function reducer(state: DetailsState | undefined, action: Action) {
  return orderReducer(state, action);
}
