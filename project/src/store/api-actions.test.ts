import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { fakeNeabyOffers, fakeOffers, fakeReviews, makeFakeOffer, makeFakeReviewData, makeFakeUserData } from '../utiles/mocks';
import { createAPI } from '../services/api';
import { AuthData, State } from '../@types/store-types';
import { ApiRoute } from '../const/api-route';
import { checkAuthAction, fetchAllOffersAction, fetchNearbyOffersAction, fetchOfferByIdAction, fetchReviewsByIdAction, loginAction, logoutAction, sendReviewAction } from './api-actions';

const fakeOfferId = 5;
const fakeOffer = makeFakeOffer();
const fakeUserData = makeFakeUserData();
const fakeReviewData = makeFakeReviewData();

describe('Async actions: test', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('fetchAllOffersAction should return offers if server return 200', async () => {
    mockAPI
      .onGet(ApiRoute.Offers)
      .reply(200, fakeOffers);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const {payload} = await store.dispatch(fetchAllOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchAllOffersAction.pending.type,
      fetchAllOffersAction.fulfilled.type
    ]);

    expect(payload).toEqual(fakeOffers);
  });

  it('fetchNearbyOffersAction should return nearbyOffers if server return 200', async () => {
    mockAPI
      .onGet(`${ApiRoute.Offers}/${fakeOfferId}/nearby`)
      .reply(200, fakeNeabyOffers);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const {payload} = await store.dispatch(fetchNearbyOffersAction(fakeOfferId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchNearbyOffersAction.pending.type,
      fetchNearbyOffersAction.fulfilled.type
    ]);

    expect(payload).toEqual(fakeNeabyOffers);
  });

  it('fetchOfferByIdAction should return offer if server return 200', async () => {
    mockAPI
      .onGet(`${ApiRoute.Offers}/${fakeOfferId}`)
      .reply(200, fakeOffer);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const {payload} = await store.dispatch(fetchOfferByIdAction(fakeOfferId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferByIdAction.pending.type,
      fetchOfferByIdAction.fulfilled.type
    ]);

    expect(payload).toEqual(fakeOffer);
  });

  it('fetchReviewsByIdAction should return reviews if server return 200', async () => {
    mockAPI
      .onGet(`${ApiRoute.Reviews}/${fakeOfferId}`)
      .reply(200, fakeReviews);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const {payload} = await store.dispatch(fetchReviewsByIdAction(fakeOfferId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsByIdAction.pending.type,
      fetchReviewsByIdAction.fulfilled.type
    ]);

    expect(payload).toEqual(fakeReviews);
  });

  it('checkAuthAction should return user data if server return 200', async () => {
    mockAPI
      .onGet(ApiRoute.Login)
      .reply(200, fakeUserData);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const {payload} = await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);

    expect(payload).toEqual(fakeUserData);
  });

  it('loginAction should return user data and save token when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '11jj11'};

    mockAPI
      .onPost(ApiRoute.Login)
      .reply(200, fakeUserData);

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    expect(store.getActions()).toEqual([]);

    const {payload} = await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);

    expect(payload).toEqual(fakeUserData);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', fakeUserData.token);
  });

  it('logoutAction should delete token when DELETE /logout', async () => {
    mockAPI
      .onDelete(ApiRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('sendReviewAction should send review if server return 200', async () => {

    const { id } = fakeReviewData;

    mockAPI
      .onPost(`${ApiRoute.Reviews}/${id}`)
      .reply(200);

    const store = mockStore();

    await store.dispatch(sendReviewAction(fakeReviewData));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      sendReviewAction.pending.type,
      sendReviewAction.fulfilled.type
    ]);
  });
});
