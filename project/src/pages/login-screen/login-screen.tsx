import {Helmet} from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import HeaderLogoOnly from '../../components/header/header-logo-only';
import { AppRoute } from '../../const/app-route';
import { AuthorizationStatus } from '../../const/authorization-status';
import { useAppSelector } from '../../hooks';
import { City } from '../../@types/offer-types';
import LoginForm from '../../components/login-form/login-form';
import RandomCity from '../../components/random-city/random-city';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

type LoginScreenProps = {
  locations: City[];
}

function LoginScreen({locations}: LoginScreenProps): JSX.Element{
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    (authorizationStatus === AuthorizationStatus.Auth)
      ? <Navigate to={AppRoute.Main} />
      :
      <div className="page page--gray page--login">
        <Helmet>
          <title>Шесть городов. Страничка регистрации.</title>
        </Helmet>
        <HeaderLogoOnly />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <LoginForm />
            <RandomCity locations={locations}/>
          </div>
        </main>
      </div>
  );
}

export default LoginScreen;
