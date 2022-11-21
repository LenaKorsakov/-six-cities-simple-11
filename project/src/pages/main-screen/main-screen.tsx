import MainContent from '../../components/main-content/main-content';
import Header from '../../components/header/header';
import {Helmet} from 'react-helmet-async';
import type { MainScreenProps } from '../../components/main-content/main-content';

function MainScreen({cities}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов.Требуется регистрация!</title>
      </Helmet>
      <Header />
      <MainContent cities={cities}/>
    </div>
  );
}

export default MainScreen;
