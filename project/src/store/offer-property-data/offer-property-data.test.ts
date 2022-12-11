import { fetchNearbyOffersAction, fetchOfferByIdAction, fetchReviewsByIdAction, sendReviewAction } from '../api-actions';
import { OfferPropertyData} from '../../@types/store-types';
import { makeFakeOffer, fakeNeabyOffers, fakeReviews } from '../../utiles/mocks';
import { offerPropertyData } from './offer-property-data';
import { Offer } from '../../@types/offer-types';

const fakeOffer = makeFakeOffer();
describe('Reducer: offersPropertyData', () => {

  let state: OfferPropertyData;

  beforeEach(() => {
    state = {
      selectedOffer: {} as Offer,
      nearbyOffers: [],
      isOfferPropertyDataLoading: false,
      reviews: [],
      isReviewFormBlocked: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offerPropertyData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchOfferByIdAction test', () => {

    it('should return offer if fetchOfferByIdAction fulfilled', () => {
      expect(offerPropertyData.reducer(state, {type: fetchOfferByIdAction.fulfilled.type, payload: fakeOffer}))
        .toEqual({...state, selectedOffer: fakeOffer});
    });
    it('should update login status to true if fetchOfferByIdAction pending', () => {
      expect(offerPropertyData.reducer(state, {type: fetchOfferByIdAction.pending.type}))
        .toEqual({...state, isOfferPropertyDataLoading: true});
    });
  });

  describe('fetchNearbyOffersAction test', () => {

    it('should return nearbyOffers if fetchNearbyOffersAction fulfilled', () => {
      expect(offerPropertyData.reducer(state, {type: fetchNearbyOffersAction.fulfilled.type, payload: fakeNeabyOffers}))
        .toEqual({...state, nearbyOffers: fakeNeabyOffers});
    });
  });

  describe('fetchOfferByIdAction test', () => {

    it('should return reviews if fetchReviewsByIdAction fulfilled', () => {
      expect(offerPropertyData.reducer(state, {type: fetchReviewsByIdAction.fulfilled.type, payload: fakeReviews}))
        .toEqual({...state, reviews: fakeReviews});
    });
  });

  describe('sendReviewAction test', () => {

    it('should update isReviewFormBlocked to true if sendReviewAction pending', () => {
      expect(offerPropertyData.reducer(state, {type: sendReviewAction.pending.type}))
        .toEqual({...state, isReviewFormBlocked: true});
    });
  });
});
