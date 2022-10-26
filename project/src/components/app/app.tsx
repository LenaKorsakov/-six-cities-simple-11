import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import ApartmentScreen from '../../pages/apartment-screen/apartment-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import {AppRout} from '../../enum/app-rout';

import type {ApartmentCardProps} from '../apartment-card/apartment-card';

type AppProps = {
  offersCount: number;
  offers: ApartmentCardProps[];//TODO как работать с такими типами?
}

function App({offersCount, offers}: AppProps): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRout.Main}
            element={<WelcomeScreen offersCount = {offersCount} offers = {offers}/>}
          />
          <Route
            path={AppRout.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRout.Room}
            element={<ApartmentScreen />}
          />
          <Route
            path={AppRout.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
