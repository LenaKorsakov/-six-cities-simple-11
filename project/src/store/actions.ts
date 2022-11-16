import {createAction} from '@reduxjs/toolkit';
import type { City, Offer } from '../@types/offer-types';
import { Sort } from '../const/sort';
import { ActionsNames } from '../const/actions-names';

export const listAllOffers = createAction(
  ActionsNames.ListAllOffers,
  (offers: Offer[]) => ({
    payload: offers
  })
);

export const listNearbyOffers = createAction(
  ActionsNames.listNearbyOffers,
  (nearbyOffers: Offer[]) => ({
    payload: nearbyOffers
  })
);

export const changeCity = createAction(
  ActionsNames.changeCity,
  (city: City) => ({
    payload: city
  })
);

export const changeSort = createAction(
  ActionsNames.changeSort,
  (sortOption: Sort ) => ({
    payload: sortOption
  })
);

