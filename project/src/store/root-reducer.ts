import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/name-space';
import { offersCityData } from './offers-city-data/offers-city-data';
import { userProcess } from './user-process/user-process';
import { offersProcess } from './offers-process/offers-process';
import { offerPropertyData } from './offer-property-data/offer-property-data';

export const rootReducer = combineReducers({
  [NameSpace.CityData]: offersCityData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.PropertyData]: offerPropertyData.reducer
});
