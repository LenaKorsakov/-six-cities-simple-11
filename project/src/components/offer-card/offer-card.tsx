import { memo } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, formatPrice, createRatingWidth } from '../../utiles/format';
import { AppRoute } from '../../const/app-route';
import type {OfferPreview} from '../../@types/offer-types';

type OfferCardProps = {
  offer: OfferPreview;
}

function OfferCard({offer}: OfferCardProps): JSX.Element{
  const {id, isPremium, previewImage, price, rating, title, type} = offer;

  return (
    <>
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
            alt={title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€
              {formatPrice(price)}
            </b>{' '}
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${createRatingWidth(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">
          {capitalizeFirstLetter(type)}
        </p>
      </div>
    </>
  );
}

export default memo(OfferCard);
