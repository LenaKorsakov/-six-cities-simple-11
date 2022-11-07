/* eslint-disable jsx-a11y/img-redundant-alt */
import {Helmet} from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewList from '../../components/review-list/review-list';
import { makeRatingWidth } from '../../utiles';

import type { Offer } from '../../@types/offer-types';
import type { Review } from '../../@types/review-types';


type OfferScreenProps = {
  offers:Offer[];
  reviews: Review[];
}

function OfferScreen({offers, reviews}: OfferScreenProps):JSX.Element {
  const {id} = useParams() as {id: string};
  const propId = +id;

  const offer = offers.find((item) => (item.id) === propId) ?? null;

  if (offer === null) {
    return (
      <NotFoundScreen/>
    );
  } return(
    <div className="page">
      <Helmet>
        <title>Шесть городов.Страничка апартаментов.</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((item: string) => (
                <div className="property__image-wrapper" key={item}>
                  <img
                    className="property__image"
                    src={item}
                    alt="Photo studio"
                  />
                </div>
              ))}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${makeRatingWidth(offer.rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>{' '}
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((item)=>(
                    <li key = {item} className="property__inside-item">{item}</li>
                  ))}
                </ul>
              </div>
              <OfferHost
                host={offer.host}
                description={offer.description}
              />
              <ReviewList
                reviews={reviews}
              />
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="TODO">
                    <img
                      className="place-card__image"
                      src="img/room.jpg"
                      width={260}
                      height={200}
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€80</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#TODO">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
