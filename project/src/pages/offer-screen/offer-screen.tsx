/* eslint-disable jsx-a11y/img-redundant-alt */
import {Helmet} from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { StarNumber } from '../../enum/star-number';
import { StarTitle } from '../../enum/star-title';
import type { Offer } from '../../@types/offer-types';

const starPickerOptions = (Object.keys(StarNumber)
  .map((key: string) => ({
    rating: StarNumber[key as keyof typeof StarNumber],
    title: StarTitle[key as keyof typeof StarTitle]
  })));

type OfferScreenProps = {
  offers:Offer[];
}

function OfferScreen({offers}: OfferScreenProps):JSX.Element {
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
                  <span style={{ width: `${offer.rating * 20}%` }} />
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
                <b className="property__price-value">€{offer?.price}</b>{' '}
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
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offer?.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{offer?.host.name}</span>
                  <span className="property__user-status">{offer?.host.isPro}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                      Reviews · <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src="img/avatar-max.jpg"
                          width={54}
                          height={54}
                          alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">Max</span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: '80%' }} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                  A quiet cozy and picturesque that hides behind a a river by
                  the unique lightness of Amsterdam. The building is green and
                  from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">
                  April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <ReviewsForm options={starPickerOptions}/>
              </section>
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
