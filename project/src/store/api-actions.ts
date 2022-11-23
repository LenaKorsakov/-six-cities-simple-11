import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import type {State, AppDispatch} from '../@types/state';
import { Offer } from '../@types/offer-types';
import { ApiRoute } from '../const/api-route';
import { setUserData, listAllOffers, setAuthorizationStatus, redirectToRoute} from './actions';
import { Action } from '../const/action';
import { AuthorizationStatus } from '../const/authorization-status';
import { AuthData, UserData } from './@types';
import { dropToken, saveToken } from '../services/token';
import { AppRoute } from '../const/app-route';

export const fetchAllOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.FetchAllOffers,
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(listAllOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(Action.SetAuthorizationStatus,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));

      dispatch(redirectToRoute(AppRoute.Login));//TODO нужен ли этот редирект?
    }
  }
);

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(Action.UserLogIn,
    async({login: email, password}, {dispatch, extra: api}) => {
      const { data } = await api.post<UserData>(ApiRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
    }
  );

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(Action.UserLogOut,
    async (_arg, { dispatch, extra: api}) => {
      await api.delete(ApiRoute.Logout);
      dropToken();
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  );
