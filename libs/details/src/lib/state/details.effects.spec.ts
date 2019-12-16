import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';
import { DetailsLoaded, LoadDetails } from './details.actions';
import { DetailsEffects } from './details.effects';





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
      expect(effects.navigatedToDetails$).toBeObservable(
        hot('-a-|', { a: new DetailsLoaded([]) })
      );
    });
  });
});
