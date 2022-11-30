import { store } from './index';
import { AuthorizationStatus } from '../const/authorization-status';
import { City, Offer } from '../@types/offer-types';
import { SortEnum } from '../const/@types';

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

export type OffersData = {
  offers: Offer[];
  selectedOffer: Offer;
  nearbyOffers:Offer[];
  isOffersDataLoading: boolean;
};

export type OffersProcess = {
  city: City;
  sortOption: SortEnum;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
