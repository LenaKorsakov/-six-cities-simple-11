import {createAction} from '@reduxjs/toolkit';
import type { City, Offer } from '../@types/offer-types';
import { Actions } from '../const/actions';
import type { SortEnum } from '../const/@types';

export const listAllOffers = createAction(
  Actions.listAllOffers,
  (offers: Offer[]) => ({
    payload: offers
  })
);

export const listNearbyOffers = createAction(
  Actions.ListNearbyOffers,
  (nearbyOffers: Offer[]) => ({
    payload: nearbyOffers
  })
);

export const changeCity = createAction(
  Actions.ChangeCity,
  (city: City) => ({
    payload: city
  })
);

export const changeSort = createAction(
  Actions.ChangeSort,
  (sortOption: SortEnum) => ({
    payload: sortOption
  })
);

