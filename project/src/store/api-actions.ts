import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { Offer } from '../@types/offer-types';
import { ApiRoute } from '../const/api-route';
import { Action } from '../const/action';
import { AuthData, UserData, State, AppDispatch} from './@types';
import { dropToken, saveToken } from '../services/token';

export const fetchAllOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.FetchAllOffers,
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
    //TODO нужно ли делать здесь try catch и при ощибке делать редирект на страницу ошибки? Или досточно перехвата в интерсепторе?
  }
);

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(Action.SetAuthorizationStatus,
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<UserData>(ApiRoute.Login);

    return data;
  }
);

export const loginAction = createAsyncThunk<
  UserData,
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

      return data;
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
    }
  );
