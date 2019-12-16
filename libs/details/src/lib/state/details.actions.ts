import { createAction, props } from '@ngrx/store';
import { Details } from '../details.model';

export const detailsLoaded = createAction(
    '[Details] details loaded',
    props<{ details: Details }>()
);
