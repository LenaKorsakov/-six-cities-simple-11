import { useState } from 'react';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersListCity from '../../components/offers-list-city/offers-list-city';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import SortOptions from '../../components/sort/sort-options';
import OffersListEmpty from '../../components/offers-list-empty/offers-list-empty';
import { sortPriceHightToLow, sortPriceLowToHight, sortRatingHightToLow, sortDefault } from '../../utiles/sort-compare';
import { Sort } from '../../const/sort';

import type {City, Offer} from '../../@types/offer-types';
import { useAppSelector } from '../../hooks';

type MainScreenProps = {
  cities: City[];
};

function MainScreen({cities}: MainScreenProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const selectedSortOption = useAppSelector((state) => state.sortOption);

  function findOffersByCityName(offer: Offer) {
    return offer.city.name === selectedCity.name;
  }

  function getSortCompare(sortOption: string) {
    switch(sortOption) {
      case Sort.PRICE_LOW_TO_HIGHT:
        return sortPriceLowToHight;
      case Sort.PRICE_HIGHT_TO_LOW:
        return sortPriceHightToLow;
      case Sort.TOP_RATED_FIRST:
        return sortRatingHightToLow;
      case Sort.POPULAR:
        return sortDefault;

      default:
        return sortDefault;
    }
  }

  const offers = useAppSelector((state)=> state.offers).filter(findOffersByCityName).sort(getSortCompare(selectedSortOption));
  const offersCount = offers.length;

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
          {!offersCount ?
            <OffersListEmpty/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found"> {offersCount} places to stay in {selectedCity.name}</b>
                <SortOptions/>
                <OffersListCity
                  onOfferHover={onOfferCardHover}
                  offers={offers}
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
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
