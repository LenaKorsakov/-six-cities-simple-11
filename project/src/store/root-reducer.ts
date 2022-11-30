import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/name-spaces';
import { offersData } from './offers-data/offers-data';
import { userProcess } from './user-process/user-process';
import { offersProcess } from './offers-process/offers-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer
});
