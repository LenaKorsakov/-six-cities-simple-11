import type { Offer} from '../../@types/offer-types';
import { makeRatingWidth, formatNumber} from '../../utiles';

type OfferPropertyProps = {
 offer: Offer;
}

function OfferProperty({offer}: OfferPropertyProps): JSX.Element {
  const {isPremium, title, rating, type, bedrooms, maxAdults, price, goods} = offer;

  return (
    <>
      {isPremium &&
      <div className="property__mark">
        <span>Premium</span>
      </div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{ width: `${makeRatingWidth(rating)}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro; {formatNumber(price)}</b>{' '}
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((item, index)=> {
            const keyValue = `${item}-${index}`;

            return (
              <li key = {keyValue} className="property__inside-item">{item}</li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default OfferProperty;
