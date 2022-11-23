import {createAction} from '@reduxjs/toolkit';
import type { City, Offer } from '../@types/offer-types';
import { Action } from '../const/action';
import type { SortEnum } from '../const/@types';
import { UserData } from './@types';

export const listAllOffers = createAction<Offer[]>(Action.ListAllOffers);

export const listNearbyOffers = createAction<Offer[]>(Action.ListNearbyOffers);

export const changeCity = createAction<City>(Action.ChangeCity);

export const changeSort = createAction<SortEnum>(Action.ChangeSort);

export const setOffersDataLoadingStatus = createAction<boolean>(Action.SetOffersDataLoadingStatus);

export const setAuthorizationStatus = createAction<string>(Action.SetAuthorizationStatus);

export const setUserData = createAction<UserData | null>(Action.SetUserData);
