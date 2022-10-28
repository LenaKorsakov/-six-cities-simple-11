import { PropsWithChildren } from 'react';
import {Helmet} from 'react-helmet-async';
import HeaderNav from '../../components/header/header-nav';
import OfferCard from '../../components/offer-card/offer-card';

import type {Offer} from '../../@types/offer-types';

type WelcomeScreenProps = PropsWithChildren <{
  offersCount: number;
  offers: Offer[];
}>;

function WelcomeScreen({offersCount, offers}: WelcomeScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов.Добро пожаловать!</title>
      </Helmet>
      <HeaderNav />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="TODO">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="TODO">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="TODO">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="TODO">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="TODO">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> {offersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">
                  Sort by
                </span> {' '}
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                  Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                  Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                  Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                  Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((item) =>
                  (
                    <OfferCard
                      key = {item.id}
                      id = {item.id}
                      isPremium = {item.isPremium}
                      previewImage = {item.previewImage}
                      price = {item.price}
                      title = {item.title}
                      rating = {item.rating}
                      type = {item.type}
                    />
                  )
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomeScreen;
