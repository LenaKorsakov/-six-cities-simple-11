import { createSelector } from 'reselect';

import { NameSpace } from '../../const/name-space';

import { Offer } from '../../@types/offer-types';
import { ReviewRaw, Review } from '../../@types/review-types';
import { State } from '../../@types/store-types';
import { adaptReview } from '../../adapter/adapter';
import { sortReviewByTime } from '../../utiles/sort-compare';
import { REVIEW_MAX_COUNT } from '../../const/review';

export const getOfferPropertyLoadingStatus = (state: State): boolean => state[NameSpace.PropertyData].isOfferPropertyDataLoading;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.PropertyData].nearbyOffers;
export const getReviewSendingStatus = (state: State): boolean => state[NameSpace.PropertyData].isReviewSending;
export const getReviewSendingError = (state: State): boolean => state[NameSpace.PropertyData].isError;

const getReviews = (state:State): ReviewRaw[] => state[NameSpace.PropertyData].reviews;
const getAdaptedReviews = createSelector(getReviews, (reviews: ReviewRaw[]) => reviews.map(adaptReview));
export const getSortedReviews = createSelector(getAdaptedReviews, (reviews: Review[]) => reviews.sort(sortReviewByTime).slice(0, REVIEW_MAX_COUNT));
