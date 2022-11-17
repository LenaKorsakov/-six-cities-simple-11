import OfferCard from '../offer-card/offer-card';
import type {OfferPreview} from '../../@types/offer-types';

type OfferCardCityProps = {
  offer: OfferPreview;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function OfferCardCity(props: OfferCardCityProps): JSX.Element{
  const {offer, onMouseEnter, onMouseLeave} = props;
  const {id} = offer;

  function handleMouseEnter() {
    onMouseEnter(id);
  }

  function handleMouseLeave() {
    onMouseLeave();
  }

  return (
    <article
      className='cities__card place-card'
      onMouseEnter = {handleMouseEnter}
      onMouseLeave = {handleMouseLeave}
    >
      <OfferCard offer={offer} />
    </article>
  );
}

export default OfferCardCity;
