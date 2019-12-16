import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DetailsEffects } from './details.effects';
import { LoadDetails, DetailsLoaded } from './details.actions';

describe('DetailsEffects', () => {
  let actions: Observable<any>;
  let effects: DetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        DetailsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(DetailsEffects);
  });

  describe('loadDetails$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadDetails() });
      expect(effects.loadDetails$).toBeObservable(
        hot('-a-|', { a: new DetailsLoaded([]) })
      );
    });
  });
});
