import MainContent from '../../components/main-content/main-content';
import HeaderSignIn from '../../components/header/header-sign-in';
import {Helmet} from 'react-helmet-async';
import type { MainScreenProps } from '../../components/main-content/main-content';

function MainScreenNotLogged({cities}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов.Требуется регистрация!</title>
      </Helmet>
      <HeaderSignIn />
      <MainContent cities={cities}/>
    </div>
  );
}

export default MainScreenNotLogged;
