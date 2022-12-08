import {Helmet} from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import HeaderLogoOnly from '../../components/header/header-logo-only';
import RandomCity from '../../components/random-city/random-city';
import LoginForm from '../../components/login-form/login-form';

import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

import { AppRoute } from '../../const/app-route';
import { AuthorizationStatus } from '../../const/authorization-status';

import { City } from '../../@types/offer-types';

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
          <title>Six cities. Login page</title>
        </Helmet>
        <HeaderLogoOnly />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <LoginForm />
            <RandomCity cities={locations}/>
          </div>
        </main>
      </div>
  );
}

export default LoginScreen;
