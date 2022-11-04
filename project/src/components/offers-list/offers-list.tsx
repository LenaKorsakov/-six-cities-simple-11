import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

import type {OfferPreview} from '../../@types/offer-types';

type OffersListProps = {
  offers: OfferPreview[];
  onOfferHover: (id: number | undefined) => void;
}

function OffersList({offers, onOfferHover}: OffersListProps): JSX.Element{
  const [activeCard, setActiveCard] = useState<number | undefined>(0);

  function handleMouseEnter(id: number | undefined) {
    setActiveCard(id);
    onOfferHover(activeCard);
  }

  function handleMouseLeave() {
    setActiveCard(0);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        (
          <OfferCard
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

export default OffersList;
