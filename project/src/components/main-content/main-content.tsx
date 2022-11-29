import { useState, useCallback, memo, useMemo} from 'react';

import OffersListCity from '../offers-list-city/offers-list-city';
import CitiesList from '../cities-list/cities-list';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import Map from '../map/map';
import SortOptions from '../sort-options/sort-options';
import OffersListEmpty from '../offers-list-empty/offers-list-empty';

import { SortType } from '../../const/sort-type';
import type {City, Offer} from '../../@types/offer-types';

import { sortPriceHightToLow, sortPriceLowToHight, sortRatingHightToLow, sortDefault } from '../../utiles/sort-compare';
import { useAppSelector } from '../../hooks';
import { getCity, getSort } from '../../store/offers-process/offers-process-selectors';
import { getAllOffers, getOffersLoadingStatus } from '../../store/offers-data/offers-data-selectors';

type MainContentProps = {
  cities: City[];
};

function MainContent({cities}: MainContentProps): JSX.Element {
  const allOffers = useAppSelector(getAllOffers);
  const selectedCity = useAppSelector(getCity);
  const selectedSortOption = useAppSelector(getSort);
  const isOffersDataLoading = useAppSelector(getOffersLoadingStatus);

  const selectedCityName = selectedCity.name;

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  const findOffersByCityName = useCallback((offer: Offer) => offer.city.name === selectedCity.name,[selectedCity]);

  const offers = allOffers.filter(findOffersByCityName);
  const offersCount = offers.length;

  const sortedOffers = useMemo(() => {
    switch(selectedSortOption) {
      case SortType.PriseLowToHight:
        return offers.slice().sort(sortPriceLowToHight);
      case SortType.PriceLowToHight:
        return offers.slice().sort(sortPriceHightToLow);
      case SortType.TopRatedFirst:
        return offers.slice().sort(sortRatingHightToLow);
      case SortType.Popular:
        return offers.slice().sort(sortDefault);

      default:
        return offers.slice().sort(sortDefault);
    }
  },[offers, selectedSortOption]);


  const onOfferCardHover = useCallback((offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) ?? null;

    setActiveOffer(currentOffer);
  }, [offers]);

  return(
    (isOffersDataLoading) ? <LoadingScreen/> :
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={cities}
              selectedCityName={selectedCityName}
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
                <SortOptions
                  selectedSortOption={selectedSortOption}
                />
                <OffersListCity
                  onOfferHover={onOfferCardHover}
                  offers={sortedOffers}
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
  );
}

export default memo(MainContent);
export type { MainContentProps as MainScreenProps };
