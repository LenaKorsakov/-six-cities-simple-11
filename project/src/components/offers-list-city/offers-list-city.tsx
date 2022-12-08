import { useCallback, memo, useState} from 'react';

import SortOptions from '../sort-options/sort-options';
import Map from '../map/map';
import OfferCardCity from '../offer-card-city/offer-card-city';
import OffersListEmpty from '../offers-list-empty/offers-list-empty';

import { useAppSelector } from '../../hooks';
import { getSort } from '../../store/offers-process/offers-process-selectors';
import { getOffersByCity, getOffersBySort } from '../../store/offers-city-data/offers-city-data-selectors';

import type {Offer, City} from '../../@types/offer-types';

type OffersListCityProps = {
  selectedCity: City;
}

function OffersListCity({ selectedCity}: OffersListCityProps): JSX.Element{
  const selectedSortOption = useAppSelector(getSort);

  const offers = useAppSelector(getOffersByCity);
  const offersCount = offers.length;

  const sortedOffers = useAppSelector(getOffersBySort);

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  const handleMouseEnter = useCallback((offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) ?? null;

    setActiveOffer(currentOffer);
  },[offers]);

  const handleMouseLeave = useCallback(() => {
    setActiveOffer(null);
  },[]);

  return (
    <div className="cities">
      {offersCount === 0 ?
        <OffersListEmpty/> :
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found"> {offersCount} places to stay in {selectedCity.name}</b>
            <SortOptions
              selectedSortOption={selectedSortOption}
            />
            <div
              className="places__list cities__places-list tabs__content"
            >
              {sortedOffers.map((offer) =>
                (
                  <OfferCardCity
                    key = {offer.id}
                    offer = {offer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                )
              )}
            </div>
          </section>
          <div className="cities__right-section">
            <Map
              city={selectedCity}
              offers={offers}
              selectedOffer={activeOffer}
              isCityMap
            />
          </div>
        </div>}
    </div>
  );
}

export default memo(OffersListCity);
