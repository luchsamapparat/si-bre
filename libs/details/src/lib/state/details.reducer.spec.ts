import { DetailsLoaded } from './details.actions';
import { DetailsState, Entity, initialState, reducer } from './details.reducer';

describe('Details Reducer', () => {
  const getDetailsId = it => it['id'];
  let createDetails;

  beforeEach(() => {
    createDetails = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Details actions ', () => {
    it('should return set the list of known Details', () => {
      const detailss = [
        createDetails('PRODUCT-AAA'),
        createDetails('PRODUCT-zzz')
      ];
      const action = new DetailsLoaded(detailss);
      const result: DetailsState = reducer(initialState, action);
      const selId: string = getDetailsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
