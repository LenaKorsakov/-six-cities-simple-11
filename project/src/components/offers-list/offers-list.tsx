import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

import type {OfferPreview} from '../../@types/offer-types';

type OffersListProps = {
  offers: OfferPreview[];
}

function OffersList({offers}: OffersListProps): JSX.Element{
  const [activeCard, setActiveCard] = useState<number>(0);
  // eslint-disable-next-line no-console
  console.log(activeCard);

  function handleMouseEnter(id: number) {
    setActiveCard(id);
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
