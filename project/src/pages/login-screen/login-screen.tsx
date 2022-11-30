import { FormEvent, useRef } from 'react';
import {Helmet} from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import HeaderLogoOnly from '../../components/header/header-logo-only';
import { AppRoute } from '../../const/app-route';
import { AuthorizationStatus } from '../../const/authorization-status';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { City } from '../../@types/offer-types';
import { getRandomItem } from '../../utiles/get-random-item';
import { changeCity } from '../../store/offers-process/offers-process';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

type LoginScreenProps = {
  locations: City[];
}

function LoginScreen({locations}: LoginScreenProps): JSX.Element{
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  }

  const randomCity = getRandomItem<City>(locations);

  function handleCityNameClick() {
    dispatch(changeCity(randomCity));
  }

  //TODO добавить валидацию. Какой способ выбрать?
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
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action=""
                method="post"
                onSubmit={handleFormSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={emailRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    autoComplete='off'
                    placeholder="Password"
                    size={10}
                    required
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
              Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div
                className="locations__item"
                onClick={handleCityNameClick}
              >
                <Link
                  className="locations__item-link"
                  to={AppRoute.Main}
                >
                  <span>{ randomCity.name }</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
}

export default LoginScreen;
