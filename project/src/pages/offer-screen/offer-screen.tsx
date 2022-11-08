import {Helmet} from 'react-helmet-async';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import OfferHost from '../../components/offer-host/offer-host';
import OfferProperty from '../../components/offer-property/offer-property';
import ReviewList from '../../components/review-list/review-list';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import Map from '../../components/map/map';


import type { Offer } from '../../@types/offer-types';
import type { Review } from '../../@types/review-types';
import OffersList from '../../components/offers-list/offers-list';


type OfferScreenProps = {
  offers:Offer[];
  reviews: Review[];
  nearOffers: Offer[];
}

function OfferScreen({offers, reviews, nearOffers}: OfferScreenProps):JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);

  const onOfferCardHover = (offerId: number | undefined) => {
    const currentOffer = nearOffers.find((offer) => offer.id === offerId) ?? null;

    setActiveCard(currentOffer);
  };

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

          <Map
            city={offer.city}
            offers={nearOffers}
            currentOffer={activeCard}
            isCityMap={false}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offers={nearOffers}
              onOfferHover={onOfferCardHover}
              isListMain={false}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
