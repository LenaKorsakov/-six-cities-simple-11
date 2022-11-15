import { useState } from 'react';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';

import type {City, Offer} from '../../@types/offer-types';
import { useAppSelector } from '../../hooks';

type MainScreenProps = {
  cities: City[];
};

function MainScreen({cities}: MainScreenProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state)=> state.offers).filter((offer)=> offer.city.name === selectedCity.name);

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  const onOfferCardHover = (offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) ?? null;

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
            <CitiesList
              cities={cities}
              selectedCity={selectedCity}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> {offers.length} places to stay in {selectedCity.name}</b>
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
                onOfferHover={onOfferCardHover}
                offers={offers}
                isListMain
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={selectedCity}
                offers={offers}
                currentOffer={activeOffer}
                isCityMap
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
