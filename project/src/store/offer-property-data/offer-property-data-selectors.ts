import { NameSpace } from '../../const/name-space';

import { Offer } from '../../@types/offer-types';
import { ReviewRaw } from '../../@types/review-types';
import { State } from '../../@types/store-types';

export const getOfferPropertyLoadingStatus = (state: State): boolean => state[NameSpace.PropertyData].isOfferPropertyDataLoading;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.PropertyData].nearbyOffers;
export const getReviews = (state:State): ReviewRaw[] => state[NameSpace.PropertyData].reviews;
export const getReviewSendingStatus = (state: State): boolean => state[NameSpace.PropertyData].isReviewSending;
export const getReviewSendingError = (state: State): boolean => state[NameSpace.PropertyData].isError;
