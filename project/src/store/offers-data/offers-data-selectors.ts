import { Offer } from '../../@types/offer-types';
import { NameSpace } from '../../const/name-spaces';
import { State } from '../@types';

export const getAllOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
