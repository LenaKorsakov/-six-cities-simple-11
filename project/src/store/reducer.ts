import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSort, listAllOffers, listNearbyOffers } from './actions';
import offers from '../mocks/offers';
import nearbyOffers from '../mocks/nearby-offers';
import { DEFAULT_CITY } from '../const/city-names';
import { DEFAULT_SORT } from '../const/sort';


const initialState = {
  offers: offers,
  nearbyOffers: nearbyOffers,
  city: DEFAULT_CITY,
  sortOption: DEFAULT_SORT
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(listAllOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(listNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortOption = action.payload;
    });
});

export {reducer};
