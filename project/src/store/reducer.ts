import { createReducer } from '@reduxjs/toolkit';
import { changeCity, listAllOffers } from './actions';
import offers from '../mocks/offers';
import { DEFAULT_CITY } from '../enum/city-names';


const initialState = {
  offers: offers,
  city: DEFAULT_CITY
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(listAllOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
