import OfferHost from '../offer-host/offer-host';
import OfferProperty from '../offer-property/offer-property';
import ReviewList from '../review-list/review-list';
import OfferGallery from '../offer-gallery/offer-gallery';
import OffersListNearby from '../offers-list-nearby/offers-list-nearby';
import Map from '../map/map';

import type { Review } from '../../@types/review-types';
import { Offer } from '../../@types/offer-types';

type OfferMainProps = {
  reviews: Review[];
  offer: Offer;
  nearbyOffers: Offer[];
}

function OfferMain({reviews, offer, nearbyOffers}: OfferMainProps):JSX.Element {

  return(
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
          offers={[...nearbyOffers, offer]}
          currentOffer={offer}
          isCityMap={false}
        />
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersListNearby
            offers={nearbyOffers}
          />
        </section>
      </div>
    </main>
  );
}

export default OfferMain;
