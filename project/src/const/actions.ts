export const Actions = {
  ListAllOffers: 'offers/listAllOffers',
  ListNearbyOffers: 'offers/listNearbyOffers',
  ChangeCity: 'offers/changeCity',
  ChangeSort: 'offers/changeSort',
  FetchAllOffers: 'data/fetchOffers',
  SetOffersDataLoadingStatus: 'data/setOffersDataLoadingStatus',
  SetAuthorizationStatus: 'data/setAuthorizationStatus',
  CheckAuth:'user/checkAuth',
  UserLogIn: 'user/login',
  UserLogOut: 'user/logout'
} as const;
