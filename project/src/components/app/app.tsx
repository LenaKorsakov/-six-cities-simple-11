import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

import {AppRoute} from '../../const/app-route';

import type { City, Offer } from '../../@types/offer-types';
import { Review } from '../../@types/review-types';

type AppProps = {
  cities: City[];
  reviews: Review[];
  nearOffers: Offer[];
}

function App({cities, reviews, nearOffers}: AppProps): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
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
                nearOffers={nearOffers}
              />
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
