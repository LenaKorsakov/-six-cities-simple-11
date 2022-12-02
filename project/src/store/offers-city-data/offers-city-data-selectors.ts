import { Offer } from '../../@types/offer-types';
import { NameSpace } from '../../const/name-space';
import { State } from '../@types';

export const getAllOffers = (state: State): Offer[] => state[NameSpace.CityData].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.CityData].isOffersDataLoading;
