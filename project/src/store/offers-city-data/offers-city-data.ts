import { createSlice } from '@reduxjs/toolkit';
import { fetchAllOffersAction} from '../api-actions';
import { NameSpace } from '../../const/name-space';
import { OffersCityData} from '../@types';

const initialState: OffersCityData = {
  offers: [],
  isOffersDataLoading: false,
};

export const offersCityData = createSlice({
  name: NameSpace.CityData,
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
