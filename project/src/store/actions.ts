import {createAction} from '@reduxjs/toolkit';
import type { City, Offer } from '../@types/offer-types';
import { Action } from '../const/actions-names';
import type { SortEnum } from '../const/@types';

export const listAllOffers = createAction(
  Action.ListAllOffers,
  (offers: Offer[]) => ({
    payload: offers
  })
);

export const listNearbyOffers = createAction(
  Action.ListNearbyOffers,
  (nearbyOffers: Offer[]) => ({
    payload: nearbyOffers
  })
);

export const changeCity = createAction(
  Action.ChangeCity,
  (city: City) => ({
    payload: city
  })
);

export const changeSort = createAction(
  Action.ChangeSort,
  (sortOption: SortEnum) => ({
    payload: sortOption
  })
);

