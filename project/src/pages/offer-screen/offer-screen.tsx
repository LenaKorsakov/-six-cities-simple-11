/* eslint-disable jsx-a11y/img-redundant-alt */
import {Helmet} from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import OfferHost from '../../components/offer-host/offer-host';
import OfferProperty from '../../components/offer-property/offer-property';
import ReviewList from '../../components/review-list/review-list';
import OfferGallery from '../../components/offer-gallery/offer-gallery';


import type { Offer } from '../../@types/offer-types';
import type { Review } from '../../@types/review-types';


type OfferScreenProps = {
  offers:Offer[];
  reviews: Review[];
  nearOffers: Offer[];
}

function OfferScreen({offers, reviews, nearOffers}: OfferScreenProps):JSX.Element {
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
          <OfferGallery offer={offer}/>

          <div className="property__container container">
            <div className="property__wrapper">
              <OfferProperty offer={offer}/>
              <OfferHost
                host={offer.host}
                description={offer.description}
              />
              <ReviewList reviews={reviews}/>
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
