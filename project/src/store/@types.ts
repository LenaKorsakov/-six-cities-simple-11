import { store } from './index';
import { AuthorizationStatus } from '../const/authorization-status';
import { SortEnum } from '../const/@types';
import { City, Offer } from '../@types/offer-types';
import { Review } from '../@types/review-types';

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
  reviews: Review[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
