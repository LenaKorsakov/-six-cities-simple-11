import { Link } from 'react-router-dom';
import type {OfferPreview} from '../../@types/offer-types';

type OfferCardProps = {
  offer: OfferPreview;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function OfferCard(props: OfferCardProps): JSX.Element{
  const {offer, onMouseEnter, onMouseLeave} = props;
  const {id, isPremium, previewImage, price, rating, title, type} = offer;

  function handleMouseEnter() {
    onMouseEnter(id);
  }

  function handleMouseLeave() {
    onMouseLeave();
  }

  return (
    <article
      className="cities__card place-card"
      onMouseEnter = {handleMouseEnter}
      onMouseLeave = {handleMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place to live"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€
              {price}
            </b>{' '}
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
