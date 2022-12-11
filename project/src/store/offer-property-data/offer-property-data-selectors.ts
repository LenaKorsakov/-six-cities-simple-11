import { createSelector } from 'reselect';

import { sortReviewByTime } from '../../utiles/sort-compare';
import { adaptReview } from '../../adapter/adapter';

import { NameSpace } from '../../const/name-space';
import { REVIEW_MAX_COUNT } from '../../const/review';

import { Offer } from '../../@types/offer-types';
import { ReviewRaw, Review } from '../../@types/review-types';
import { State } from '../../@types/store-types';


export const getOfferPropertyLoadingStatus = (state: State): boolean => state[NameSpace.PropertyData].isOfferPropertyDataLoading;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.PropertyData].nearbyOffers;
export const checkIsReviewFormBlocked = (state: State): boolean => state[NameSpace.PropertyData].isReviewFormBlocked;

const getReviews = (state:State): ReviewRaw[] => state[NameSpace.PropertyData].reviews;
const getAdaptedReviews = createSelector(getReviews, (reviews: ReviewRaw[]) => reviews.map(adaptReview));
export const getSortedReviews = createSelector(getAdaptedReviews, (reviews: Review[]) => reviews.sort(sortReviewByTime).slice(0, REVIEW_MAX_COUNT));
