export const Action = {
  FetchAllOffers: 'data/fetchOffers',
  FetchNearbyOffers: 'data/fetchNearbyOffers',
  SetUserData: 'data/setData',

  SetAuthorizationStatus: 'user/setAuthorizationStatus',
  UserLogIn: 'user/login',
  UserLogOut: 'user/logout',

  RedirectToRoute: 'user/redirectToRoute'
} as const;
