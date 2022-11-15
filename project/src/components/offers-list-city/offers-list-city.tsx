import OfferCardCity from '../offer-card-city/offer-card-city';

import type {OfferPreview} from '../../@types/offer-types';

type OffersListCityProps = {
  offers: OfferPreview[];
  onOfferHover: (id: number | undefined) => void;
}

function OffersListCity({offers, onOfferHover}: OffersListCityProps): JSX.Element{

  function handleMouseEnter(id: number | undefined) {
    onOfferHover(id);
  }

  function handleMouseLeave() {
    onOfferHover(0);
  }

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

export default OffersListCity;
