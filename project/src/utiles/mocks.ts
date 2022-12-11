import {datatype, commerce, image, internet, address, lorem, date} from 'faker';
import { Offer, Location, City, Host } from '../@types/offer-types';
import { ReviewRaw, User } from '../@types/review-types';
import { ReviewData, UserData } from '../@types/store-types';

export const makeFakeHost = (): Host => ({
  id: datatype.number(),
  name: internet.exampleEmail(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar()
});

export const makeFakeLocation = (): Location => ({
  zoom: datatype.number({min: 5, max: 15}),
  latitude: Number(address.latitude()),
  longitude: Number(address.longitude())
});

export const makeFakeCity = (): City => ({
  name: address.city(),
  location: makeFakeLocation()
});

export const makeFakeOffer = (): Offer => ( {
  bedrooms: datatype.number(),
  city: makeFakeCity(),
  description: commerce.productDescription(),
  goods: Array.from({length: 5}, () => commerce.product()),
  host: makeFakeHost(),
  id: datatype.number(),
  images: Array.from({length: 6}, () => image.imageUrl(260, 200)),
  isPremium: datatype.boolean(),
  location: makeFakeLocation(),
  maxAdults: datatype.number(),
  previewImage: image.imageUrl(),
  price: datatype.number(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.01 }),
  title: commerce.productName(),
  type: commerce.product()
});

export const fakeOffers = Array.from({length: 15}, makeFakeOffer);
export const fakeNeabyOffers = Array.from({length: 3}, makeFakeOffer);

export const makeFakeReview = (): ReviewRaw => ({
  id: datatype.number(),
  user: makeFakeHost() as User,
  rating: datatype.number({min: 1, max: 5, precision: 0.1}),
  comment: lorem.paragraph(),
  date: date.recent().toISOString()
});

export const makeFakeReviewData = (): ReviewData => ({
  id: datatype.number(),
  comment: lorem.paragraph(),
  rating: datatype.number({min: 1, max: 5, precision: 0.1}),
});

export const makeFakeUserData = (): UserData => ({
  id: datatype.number(),
  email: internet.exampleEmail(),
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
  token: lorem.word()
});

export const fakeReviews = Array.from({length: 8}, makeFakeReview);
