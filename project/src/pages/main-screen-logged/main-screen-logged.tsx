import MainContent from '../../components/main-content/main-content';
import HeaderSignOut from '../../components/header/header-sign-out';
import {Helmet} from 'react-helmet-async';
import type { MainScreenProps } from '../../components/main-content/main-content';

function MainScreenLogged({cities}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов.Добро пожаловать!</title>
      </Helmet>
      <HeaderSignOut />
      <MainContent cities={cities}/>
    </div>
  );
}

export default MainScreenLogged;
