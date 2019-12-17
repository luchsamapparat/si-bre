import { createAction, props } from '@ngrx/store';

export const spinnerStart = createAction(
    '[Spinner] start',
    props<{ names: string[] }>()
);

export const spinnerEnd = createAction(
    '[Spinner] end',
    props<{ names: string[] }>()
);
