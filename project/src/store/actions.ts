import {createAction} from '@reduxjs/toolkit';
import type { City, Offer } from '../@types/offer-types';
import { Actions } from '../const/actions';
import type { SortEnum } from '../const/@types';

export const listAllOffers = createAction<Offer[]>(Actions.ListAllOffers);

export const listNearbyOffers = createAction<Offer[]>(Actions.ListNearbyOffers);

export const changeCity = createAction<City>(Actions.ChangeCity);

export const changeSort = createAction<SortEnum>(Actions.ChangeSort);

export const setOffersDataLoadingStatus = createAction<boolean>(Actions.SetOffersDataLoadingStatus);

export const requireAuthorication = createAction<string>(Actions.SetAuthorizationStatus);
