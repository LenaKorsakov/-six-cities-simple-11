import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSort,
  listAllOffers,
  listNearbyOffers,
  requireAuthorication,
  setOffersDataLoadingStatus
} from './actions';
import {
  fetchAllOffersAction
} from './api-actions';

import nearbyOffers from '../mocks/nearby-offers';
import { DEFAULT_CITY } from '../const/city-names';
import { DEFAULT_SORT } from '../const/sort-type';
import { City, Offer } from '../@types/offer-types';
import { SortEnum } from '../const/@types';
import { AuthorizationStatus } from '../const/authorization-status';


type InitialState = {
  offers: Offer[];
  nearbyOffers: Offer[];
  city: City;
  sortOption: SortEnum;
  isOffersDataLoading: boolean;
  authorizationStatus: string;
}

const initialState: InitialState = {
  offers: [],
  nearbyOffers,
  city: DEFAULT_CITY,
  sortOption: DEFAULT_SORT,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorication, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(fetchAllOffersAction.pending, (state) => {
      state.isOffersDataLoading = true;
    })
    .addCase(fetchAllOffersAction.fulfilled, (state) => {
      state.isOffersDataLoading = false;
    })
    .addCase(fetchAllOffersAction.rejected, (state) => {
      state.isOffersDataLoading = false;
    });
});

export {reducer};
