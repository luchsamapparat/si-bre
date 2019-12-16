import { createAction, props } from '@ngrx/store';
import { Search } from '@si-bre/search';
import { Details } from '../details.model';

export const navigatedToDetails = createAction(
    '[Details] load details',
    props<{ search: Search }>()
);

export const detailsLoaded = createAction(
    '[Details] details loaded',
    props<{ details: Details }>()
);
