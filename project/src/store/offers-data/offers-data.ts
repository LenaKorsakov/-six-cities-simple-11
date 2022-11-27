import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/name-spaces';
import { OffersData} from '../@types';
import { fetchAllOffersAction } from '../api-actions';

const initialState: OffersData = {
  offers: [],
  nearbyOffers: [],
  isOffersDataLoading: false,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchAllOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  }
});
