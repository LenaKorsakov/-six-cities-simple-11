import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import type {State, AppDispatch} from '../@types/state';
import { Offer } from '../@types/offer-types';
import { ApiRoute } from '../const/api-route';
import { listAllOffers, requireAuthorication, setOffersDataLoadingStatus } from './actions';
import { Actions } from '../const/actions';
import { AuthorizationStatus } from '../const/authorization-status';
import { AuthData, UserData } from './@types';
import { dropToken, saveToken } from '../services/token';

export const fetchAllOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Actions.FetchAllOffers,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));

    const { data } = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(listAllOffers(data));

    dispatch(setOffersDataLoadingStatus(false));
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
>(Actions.SetAuthorizationStatus,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorication(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorication(AuthorizationStatus.NoAuth));
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
  >(Actions.UserLogIn,
    async({login: email, password}, {dispatch, extra: api}) => {
      const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorication(AuthorizationStatus.Auth));
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
  >(Actions.UserLogOut,
    async (_arg, { dispatch, extra: api}) => {
      await api.delete(ApiRoute.Logout);
      dropToken();
      dispatch(requireAuthorication(AuthorizationStatus.NoAuth));
    }
  );
