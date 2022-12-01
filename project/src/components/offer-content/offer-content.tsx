import OfferHost from '../offer-host/offer-host';
import OfferProperty from '../offer-property/offer-property';
import ReviewBlock from '../review-block/review-block';
import OfferGallery from '../offer-gallery/offer-gallery';
import OffersListNearby from '../offers-list-nearby/offers-list-nearby';
import Map from '../map/map';

import type { Review } from '../../@types/review-types';
import { Offer } from '../../@types/offer-types';

type OfferContentProps = {
  reviews: Review[];
  offer: Offer;
  nearbyOffers: Offer[];
  offerId: number;
}

function OfferContent({reviews, offer, nearbyOffers, offerId}: OfferContentProps):JSX.Element {

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
            <ReviewBlock
              reviews={reviews}
              offerId={offerId}
            />
          </div>
        </div>

        <Map
          city={offer.city}
          offers={[...nearbyOffers, offer]}
          selectedOffer={offer}
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

export default OfferContent;
