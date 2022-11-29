import { useCallback, memo } from 'react';
import OfferCardCity from '../offer-card-city/offer-card-city';

import type {OfferPreview} from '../../@types/offer-types';

type OffersListCityProps = {
  offers: OfferPreview[];
  onOfferHover: (id: number | undefined) => void;
}

function OffersListCity({offers, onOfferHover}: OffersListCityProps): JSX.Element{

  const handleMouseEnter = useCallback((id: number | undefined) => {
    onOfferHover(id);
  },[onOfferHover]);

  const handleMouseLeave = useCallback(() => {
    onOfferHover(0);
  },[onOfferHover]);

  return (
    <div
      className="places__list cities__places-list tabs__content"
    >
      {offers.map((offer) =>
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
  );
}

export default memo(OffersListCity);
