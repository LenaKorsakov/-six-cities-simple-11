import {Helmet} from 'react-helmet-async';
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

  const onOfferCardHover = (offerId: number | undefined) => {
    // eslint-disable-next-line no-console
    console.log(offerId);//TODO временное решение,чтобы запускался сайт. пока не пойму как сделать пропс onOfferHover в OfferList необязательым
  };

  const {id} = useParams() as {id: string};
  const propId = +id;

  const offer = offers.find((item) => (item.id) === propId) ?? null;

  function handleOfferClick() {
    window.scroll(0,0);
  }

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
            offers={[...nearOffers, offer]}
            currentOffer={offer}
            isCityMap={false}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div onClick={handleOfferClick}>
              <OffersList
                offers={nearOffers}
                onOfferHover={onOfferCardHover}
                isListMain={false}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
