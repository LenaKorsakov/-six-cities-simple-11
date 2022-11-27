import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';

import {AppRoute} from '../../const/app-route';

import type { City} from '../../@types/offer-types';
import { Review } from '../../@types/review-types';
import MainScreen from '../../pages/main-screen/main-screen';

import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const/authorization-status';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

type AppProps = {
  cities: City[];
  reviews: Review[];
}

function App({cities, reviews}: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    authorizationStatus === AuthorizationStatus.Unknown
      ? <LoadingScreen />
      :
      <HelmetProvider>
        <HistoryRoute history={browserHistory}>
          <ScrollToTop/>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<MainScreen cities = {cities}/>}
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <LoginScreen locations = {cities}/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferScreen
                  reviews={reviews}
                />
              }
            />
            <Route
              path={AppRoute.NotFound}
              element={<NotFoundScreen />}
            />
          </Routes>
        </HistoryRoute>
      </HelmetProvider>
  );
}

export default App;
