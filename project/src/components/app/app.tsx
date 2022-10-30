import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import {AppRoute} from '../../enum/app-route';

import type {Offer} from '../../@types/offer-types';

type AppProps = {
  offersCount: number;
  offers: Offer[];
}

function App({offersCount, offers}: AppProps): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<WelcomeScreen offersCount = {offersCount} offers = {offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen />}
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
