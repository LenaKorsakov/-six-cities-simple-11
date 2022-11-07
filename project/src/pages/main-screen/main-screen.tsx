import { PropsWithChildren, useState } from 'react';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';

import type {Offer} from '../../@types/offer-types';


type MainScreenProps = PropsWithChildren <{
  offers: Offer[];
}>;

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const city = offers[0].city;//TODO нужен другой способ выбора города
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const onOfferMarkerHover = (offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setActiveOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов.Добро пожаловать!</title>
      </Helmet>
      <Header />
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
                <a className="locations__item-link tabs__item tabs__item--active" href="TODO">
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
              <b className="places__found"> {offers.length} places to stay in Amsterdam</b>
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
              <OffersList
                onOfferHover={onOfferMarkerHover}
                offers={offers}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                offers={offers}
                currentOffer={activeOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
