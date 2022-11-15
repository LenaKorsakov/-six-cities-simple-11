import OfferCardNearby from '../offer-card-nearby/offer-card-nearby';

import type {OfferPreview} from '../../@types/offer-types';

type OffersListNearbyProps = {
  offers: OfferPreview[];
}

function OffersListNearby({offers}: OffersListNearbyProps): JSX.Element{
  return (
    <div className="places__list near-places__list">
      {offers.map((offer) =>
        (
          <OfferCardNearby
            key = {offer.id}
            offer = {offer}
          />
        )
      )}
    </div>
  );
}

export default OffersListNearby;
