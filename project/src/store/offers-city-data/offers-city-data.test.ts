import { offersCityData } from './offers-city-data';
import { fetchAllOffersAction } from '../api-actions';
import { OffersCityData } from '../../@types/store-types';
import { fakeOffers } from '../../utiles/mocks';

describe('Reducer: offersCityData', () => {

  let state: OffersCityData;

  beforeEach(() => {
    state = {
      offers: [],
      isOffersDataLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersCityData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchAllOffersAction test', () => {

    it('should return offers if fetchAllOffersAction fulfilled', () => {
      expect(offersCityData.reducer(state, {type: fetchAllOffersAction.fulfilled.type, payload: fakeOffers}))
        .toEqual({offers: fakeOffers, isOffersDataLoading: false});
    });
    it('should update login status to true if fetchAllOffersAction pending', () => {
      expect(offersCityData.reducer(state, {type: fetchAllOffersAction.pending.type}))
        .toEqual({...state, isOffersDataLoading: true});
    });
  });
});
