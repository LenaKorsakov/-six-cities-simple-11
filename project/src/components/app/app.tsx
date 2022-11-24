import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

import HistoryRouter from '../history-route/history-router';
import browserHistory from '../../browser-history';

import {AppRoute} from '../../const/app-route';

import type { City} from '../../@types/offer-types';
import { Review } from '../../@types/review-types';
import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  cities: City[];
  reviews: Review[];
}

function App({cities, reviews}: AppProps): JSX.Element {
  return(
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop/>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen cities = {cities}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
