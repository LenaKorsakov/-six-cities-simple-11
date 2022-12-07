import { store } from '../store/index';
import { AuthorizationStatus } from '../const/authorization-status';
import { SortEnum } from './sort-types';
import { City, Offer } from './offer-types';
import { ReviewRaw } from './review-types';

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type ReviewData = {
  id: number;
  comment: string;
  rating: number;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData;
  isLoginLoading: boolean;
};

export type OffersCityData = {
  offers: Offer[];
  isOffersDataLoading: boolean;
};

export type OffersProcess = {
  city: City;
  sortOption: SortEnum;
};

export type OfferPropertyData = {
  selectedOffer: Offer;
  nearbyOffers: Offer[];
  isOfferPropertyDataLoading: boolean;
  reviews: ReviewRaw[];
  isReviewFormBlocked: boolean;
  isSuccess: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
