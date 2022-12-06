export const Action = {
  FetchAllOffers: 'city/fetchOffers',
  FetchNearbyOffers: 'city/fetchNearbyOffers',

  FetchOfferById: 'property/fetchOfferById',
  FetchReviewsById: 'property/fetchReviewsById',
  SendReview: 'property/sendReview',

  SetUserData: 'user/setUserData',
  SetAuthorizationStatus: 'user/setAuthorizationStatus',
  UserLogIn: 'user/login',
  UserLogOut: 'user/logout',

  RedirectToRoute: 'user/redirectToRoute',
  ValidateForm: 'user/validateForm'
} as const;
