import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { HelmetProvider } from 'react-helmet-async';
import App from './app';
import HistoryRoute from '../history-route/history-route';
import { AppRoute } from '../../const/app-route';
import { AuthorizationStatus } from '../../const/authorization-status';
import { DEFAULT_SORT} from '../../const/sort-type';
import { CITIES } from '../../const/city-name';
import { fakeOffers, makeFakeOffer, fakeNeabyOffers, fakeReviews } from '../../utiles/mocks';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { DEFAULT_CITY } from '../../const/city-name';
import { createAPI } from '../../services/api';
import { OfferPropertyData, OffersCityData, OffersProcess, UserData, UserProcess} from '../../@types/store-types';
import { State } from '../../@types/store-types';

const fakeOffer = makeFakeOffer();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<State,
Action<string>,
ThunkDispatch<State, typeof api, Action>>(middlewares);

const fakeState = {
  CITY_DATA: {
    offers: fakeOffers,
    isOffersDataLoading: false
  } as OffersCityData,
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: {} as UserData,
    isLoginLoading: false
  } as UserProcess,
  OFFERS: {
    city: DEFAULT_CITY,
    sortOption: DEFAULT_SORT
  } as OffersProcess,
  PROPERTY_DATA: {
    selectedOffer: fakeOffer,
    nearbyOffers: fakeNeabyOffers,
    isOfferPropertyDataLoading: false,
    reviews: fakeReviews,
    isReviewFormBlocked: false,
  } as OfferPropertyData
};

window.scrollTo = jest.fn();

const store = mockStore(fakeState);

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HelmetProvider>
      <HistoryRoute history={history}>
        <ScrollToTop/>
        <App cities={CITIES} />
      </HistoryRoute>
    </HelmetProvider>
  </Provider>
);

describe('Application Routing', () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
  it('should render "LoginScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByRole('button').textContent).toBe('Sign in');
  });

  it('should render "OfferScreen" when user navigate to "/offer/:id"', () => {
    history.push(`${AppRoute.Offer}/${fakeOffer.id}`);

    render(fakeApp);

    //expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
    //expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/To the main page/i)).toBeInTheDocument();
    //expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    //expect(screen.getByText(fakeNeabyOffers[1].price)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('To the main page')).toBeInTheDocument();
  });
});

