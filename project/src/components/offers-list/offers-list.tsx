import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';

import type {OfferPreview} from '../../@types/offer-types';

type OffersListProps = {
  offers: OfferPreview[];
  onOfferHover: (id: number | undefined) => void;
  isListMain: boolean;
}

function OffersList({offers, isListMain, onOfferHover}: OffersListProps): JSX.Element{

  function handleMouseEnter(id: number | undefined) {
    onOfferHover(id);
  }

  function handleMouseLeave() {
    onOfferHover(0);
  }

  return (
    <div
      className={cn('places__list',{
        'cities__places-list': isListMain,
        'tabs__content': isListMain,
        'near-places__list': !isListMain
      })}
    >
      {offers.map((offer) =>
        (
          <OfferCard
            key = {offer.id}
            offer = {offer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            isCityCard={isListMain}
          />
        )
      )}
    </div>
  );
}

export default OffersList;
