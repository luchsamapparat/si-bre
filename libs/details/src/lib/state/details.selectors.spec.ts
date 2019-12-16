import { Entity, DetailsState } from './details.reducer';
import { detailsQuery } from './details.selectors';

describe('Details Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDetailsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createDetails = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      details: {
        list: [
          createDetails('PRODUCT-AAA'),
          createDetails('PRODUCT-BBB'),
          createDetails('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Details Selectors', () => {
    it('getAllDetails() should return the list of Details', () => {
      const results = detailsQuery.getAllDetails(storeState);
      const selId = getDetailsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedDetails() should return the selected Entity', () => {
      const result = detailsQuery.getSelectedDetails(storeState);
      const selId = getDetailsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = detailsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = detailsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
