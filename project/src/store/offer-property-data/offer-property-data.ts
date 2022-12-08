import { createSlice } from '@reduxjs/toolkit';
import { fetchNearbyOffersAction, fetchOfferByIdAction, fetchReviewsByIdAction, sendReviewAction } from '../api-actions';

import { NameSpace } from '../../const/name-space';

import { Offer } from '../../@types/offer-types';
import { OfferPropertyData} from '../../@types/store-types';
import { ReviewSendingStatus } from '../../const/review-sending-status';

const initialState: OfferPropertyData = {
  selectedOffer: {} as Offer,
  nearbyOffers: [],
  isOfferPropertyDataLoading: false,
  reviews: [],
  isReviewFormBlocked: false,
  reviewSendingStatus: ReviewSendingStatus.Default,
};

export const offerPropertyData = createSlice({
  name: NameSpace.CityData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isOfferPropertyDataLoading = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.isOfferPropertyDataLoading = false;
        state.selectedOffer = action.payload;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.isOfferPropertyDataLoading = false;
      })
      .addCase(fetchReviewsByIdAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewFormBlocked = true;
        state.reviewSendingStatus = ReviewSendingStatus.Default;
      })
      .addCase(sendReviewAction.fulfilled, (state) => {
        state.isReviewFormBlocked = false;
        state.reviewSendingStatus = ReviewSendingStatus.Fulfilled;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewFormBlocked = false;
        state.reviewSendingStatus = ReviewSendingStatus.Rejected;
      });
  }
});
