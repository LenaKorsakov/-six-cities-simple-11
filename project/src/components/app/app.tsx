import {Route, BrowserRouter, Routes} from 'react-router-dom';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NotFoundScreen from '../../pages/not-found-screen//not-found-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import {AppRout} from '../../enum/app-rout';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRout.Main}
          element={<WelcomeScreen offersCount = {offersCount}/>}
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
