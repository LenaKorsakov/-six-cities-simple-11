import {createAction} from '@reduxjs/toolkit';
import type { City, Offer } from '../@types/offer-types';
import { Action } from '../const/actions-names';
import type { SortEnum } from '../const/@types';

export const listAllOffers = createAction(
  Action.LIST_ALL_OFFERS,
  (offers: Offer[]) => ({
    payload: offers
  })
);

export const listNearbyOffers = createAction(
  Action.LIST_NEARBY_OFFERS,
  (nearbyOffers: Offer[]) => ({
    payload: nearbyOffers
  })
);

export const changeCity = createAction(
  Action.CHANGE_CITY,
  (city: City) => ({
    payload: city
  })
);

export const changeSort = createAction(
  Action.CHANGE_SORT,
  (sortOption: SortEnum) => ({
    payload: sortOption
  })
);

