import {Helmet} from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { memo, useEffect } from 'react';

import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import OfferContent from '../../components/offer-content/offer-content';
import LoadingScreen from '../loading-screen/loading-screen';

import { useAppSelector} from '../../hooks';
import { store } from '../../store';
import { getOffersByCity } from '../../store/offers-city-data/offers-city-data-selectors';
import { fetchNearbyOffersAction, fetchOfferByIdAction, fetchReviewsByIdAction } from '../../store/api-actions';
import { getNearbyOffers, getOfferPropertyLoadingStatus } from '../../store/offer-property-data/offer-property-data-selectors';


function OfferScreen():JSX.Element {
  const offers = useAppSelector(getOffersByCity);

  const {id} = useParams() as {id: string};
  const propId = +id;

  const offer = offers.find((item) => item.id === propId) ?? null;

  useEffect(() => {
    if (offer !== null) {
      store.dispatch(fetchNearbyOffersAction(offer.id));
      store.dispatch(fetchOfferByIdAction(offer.id));
      store.dispatch(fetchReviewsByIdAction(offer.id));
    }
  }, [offer]);


  const nearbyOffers = useAppSelector(getNearbyOffers);
  const isDataLoading = useAppSelector(getOfferPropertyLoadingStatus);

  if (offer === null) {
    return (
      <NotFoundScreen />
    );
  }

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return(
    <div className="page">
      <Helmet>
        <title>Six cities. Offer page</title>
      </Helmet>
      <Header />
      <OfferContent
        offer={offer}
        nearbyOffers={nearbyOffers}
        offerId={propId}
      />
    </div>
  );
}

export default memo(OfferScreen);
