import { createSlice } from '@reduxjs/toolkit';
import { fetchAllOffersAction, fetchNearbyOffersAction, fetchOfferByIdAction } from '../api-actions';
import { NameSpace } from '../../const/name-spaces';
import { Offer } from '../../@types/offer-types';
import { OffersData} from '../@types';

const initialState: OffersData = {
  offers: [],
  selectedOffer: {} as Offer,
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
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.selectedOffer = action.payload;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  }
});
