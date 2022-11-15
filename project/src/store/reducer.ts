import { createReducer } from '@reduxjs/toolkit';
import { changeCity, listAllOffers, listNearbyOffers } from './actions';
import offers from '../mocks/offers';
import nearbyOffers from '../mocks/nearby-offers';
import { DEFAULT_CITY } from '../const/city-names';


const initialState = {
  offers: offers,
  nearbyOffers: nearbyOffers,
  city: DEFAULT_CITY
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
    });
});

export {reducer};
