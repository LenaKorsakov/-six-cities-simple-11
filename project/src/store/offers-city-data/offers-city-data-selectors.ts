import { createSelector } from 'reselect';

import { getCity, getSort } from '../offers-process/offers-process-selectors';

import { SortType } from '../../const/sort-type';
import { sortPriceLowToHight, sortPriceHightToLow, sortRatingHightToLow, sortDefault } from '../../utiles/sort-compare';
import { NameSpace } from '../../const/name-space';

import { Offer } from '../../@types/offer-types';
import { State } from '../../@types/store-types';

const getAllOffers = (state: State): Offer[] => state[NameSpace.CityData].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.CityData].isOffersDataLoading;

export const getOffersByCity = createSelector(getAllOffers, getCity, (offers, city) => offers.filter(((offer: Offer) => offer.city.name === city.name)));

export const getOffersBySort = createSelector(getOffersByCity, getSort, (offers, selectedSortOption) => {
  switch(selectedSortOption) {
    case SortType.PriseLowToHight:
      return offers.slice().sort(sortPriceLowToHight);
    case SortType.PriceHightToLow:
      return offers.slice().sort(sortPriceHightToLow);
    case SortType.TopRatedFirst:
      return offers.slice().sort(sortRatingHightToLow);
    case SortType.Popular:
      return offers.slice().sort(sortDefault);

    default:
      return offers.slice().sort(sortDefault);
  }});
