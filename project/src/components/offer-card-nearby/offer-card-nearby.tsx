import OfferCard from '../offer-card/offer-card';
import type {OfferPreview} from '../../@types/offer-types';

type OfferCardNearbyProps = {
  offer: OfferPreview;
}

function OfferCardNearby({offer}: OfferCardNearbyProps): JSX.Element{


  return (
    <article className='near-places__card place-card'>
      <OfferCard offer={offer} />
    </article>
  );
}

export default OfferCardNearby;
