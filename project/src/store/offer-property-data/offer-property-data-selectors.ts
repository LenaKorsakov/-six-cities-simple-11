import { Offer } from '../../@types/offer-types';
import { Review } from '../../@types/review-types';
import { NameSpace } from '../../const/name-spaces';
import { State } from '../@types';

export const getOfferPropertyLoadingStatus = (state: State): boolean => state[NameSpace.PropertyData].isOfferPropertyDataLoading;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.PropertyData].nearbyOffers;
export const getReviews = (state:State): Review[] => state[NameSpace.PropertyData].reviews;
