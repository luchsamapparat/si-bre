import { createAction, props } from '@ngrx/store';
import { Search } from '../search.model';

export const searchSubmitted = createAction(
    '[Search] search submitted',
    props<{ search: Search }>()
);
