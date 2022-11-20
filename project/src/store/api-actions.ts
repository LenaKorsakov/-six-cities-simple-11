import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import type {State, AppDispatch} from '../@types/state';
import { Offer } from '../@types/offer-types';
import { ApiRoute } from '../const/api-route';
import { listAllOffers } from './actions';
import { Actions } from '../const/actions';

export const fetchAllOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Actions.FetchAllOffers, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(ApiRoute.Offers);
  dispatch(listAllOffers(data));
});

