import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import {AppRoute} from '../../enum/app-route';

import type { Offer } from '../../@types/offer-types';
import { Review } from '../../@types/review-types';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
  nearOffers: Offer[];
}

function App({offers, reviews, nearOffers}: AppProps): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen offers = {offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferScreen
                offers={offers}
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
