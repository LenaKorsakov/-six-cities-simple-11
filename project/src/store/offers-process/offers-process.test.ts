import { OffersProcess } from '../../@types/store-types';
import { CityName, DEFAULT_CITY } from '../../const/city-name';
import { DEFAULT_SORT, SortType } from '../../const/sort-type';
import { changeSort, changeCity, offersProcess } from './offers-process';

describe('Reducer: offersProcess', () => {

  let state: OffersProcess;

  beforeEach(() => {
    state = {
      city: DEFAULT_CITY,
      sortOption: DEFAULT_SORT
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change sort option to selected sort option', () => {
    expect(offersProcess.reducer(state, {type: changeSort, payload: SortType.TopRatedFirst}))
      .toEqual({...state, sortOption: SortType.TopRatedFirst});
  });

  it('should change city to selected city', () => {
    expect(offersProcess.reducer(state, {type: changeCity, payload: CityName.Amsterdam}))
      .toEqual({...state, city: CityName.Amsterdam});
  });
});
