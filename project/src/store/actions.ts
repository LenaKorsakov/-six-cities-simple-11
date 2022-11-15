import {createAction} from '@reduxjs/toolkit';
import type { City, Offer } from '../@types/offer-types';

export const listAllOffers = createAction(
  'offers/listAllOffers',
  (offers: Offer[]) => ({
    payload: offers
  })
);

export const listNearbyOffers = createAction(
  'offers/listNearbyOffers',
  (nearbyOffers: Offer[]) => ({
    payload: nearbyOffers
  })
);

export const changeCity = createAction(
  'offers/changeCity',
  (city: City) => ({
    payload: city
  })
);

//TODO  логика для сортировки, офферов рядом?
