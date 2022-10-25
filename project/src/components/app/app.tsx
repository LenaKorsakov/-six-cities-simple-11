import {Route, BrowserRouter, Routes} from 'react-router-dom';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import {AppRout} from '../../enum/app-rout';

import type {RoomCardProps} from '../../components/room-card/room-card';

type AppProps = {
  offersCount: number;
  offers: RoomCardProps[];//TODO как работать с такими типами?
}

function App({offersCount, offers}: AppProps): JSX.Element {
  return(
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
          element={<RoomScreen />}
        />
        <Route
          path={AppRout.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
