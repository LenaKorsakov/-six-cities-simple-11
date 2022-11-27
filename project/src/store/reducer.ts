import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSort,
  setUserData,
  listAllOffers,
  listNearbyOffers,
  setAuthorizationStatus,
} from './actions';
import {
  fetchAllOffersAction
} from './api-actions';

import { DEFAULT_CITY } from '../const/city-name';
import { DEFAULT_SORT } from '../const/sort-type';
import { City, Offer } from '../@types/offer-types';
import { SortEnum } from '../const/@types';
import { AuthorizationStatus } from '../const/authorization-status';
import { UserData } from './@types';


type InitialState = {
  offers: Offer[];
  nearbyOffers: Offer[];
  city: City;
  sortOption: SortEnum;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData;
}

const initialState: InitialState = {
  offers: [],
  nearbyOffers: [],
  city: DEFAULT_CITY,
  sortOption: DEFAULT_SORT,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {} as UserData
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
    .addCase(setAuthorizationStatus, (state, action) => {
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
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
