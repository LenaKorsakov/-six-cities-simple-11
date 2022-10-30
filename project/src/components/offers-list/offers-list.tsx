import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

import type {OfferPreview} from '../../@types/offer-types';
import { useNavigate } from 'react-router-dom';

type OffersListProps = {
  offers: OfferPreview[];
}

function OffersList({offers}: OffersListProps): JSX.Element{
  const [activeCard, setActiveCard] = useState<number>(0);
  const navigate = useNavigate();

  function handleMouseEnter(id: number) {
    setActiveCard(id);
  }

  function handleMouseLeave() {
    setActiveCard(0);
  }

  function handleClick() {
    navigate(`/offer/${activeCard}}`);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        (
          <OfferCard
            key = {offer.id}
            offer = {offer}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleClick={handleClick}
          />
        )
      )}
    </div>
  );
}

export default OffersList;
