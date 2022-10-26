import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import ApartmentScreen from '../../pages/apartment-screen/apartment-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import {AppRoute} from '../../enum/app-route';

import type {OfferProps} from '../../@types/offer-type';

type AppProps = {
  offersCount: number;
  offers: OfferProps[];
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
            path={AppRoute.Room}
            element={<ApartmentScreen />}
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
