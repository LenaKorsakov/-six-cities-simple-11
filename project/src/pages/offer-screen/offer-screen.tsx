import {Helmet} from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect, memo } from 'react';
import { useAppSelector } from '../../hooks';

import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import OfferContent from '../../components/offer-content/offer-content';
import LoadingScreen from '../loading-screen/loading-screen';

import { store } from '../../store';
import { getAllOffers } from '../../store/offers-city-data/offers-city-data-selectors';
import { fetchNearbyOffersAction, fetchOfferByIdAction, fetchReviewsByIdAction } from '../../store/api-actions';
import { getNearbyOffers, getOfferPropertyLoadingStatus, getReviews } from '../../store/offer-property-data/offer-property-data-selectors';


function OfferScreen():JSX.Element {

  const nearbyOffers = useAppSelector(getNearbyOffers);
  const offers = useAppSelector(getAllOffers);
  const isDataLoading = useAppSelector(getOfferPropertyLoadingStatus);
  const reviews = useAppSelector(getReviews);

  const {id} = useParams() as {id: string};
  const propId = +id;

  useEffect(() => {
    store.dispatch(fetchNearbyOffersAction(propId));
    store.dispatch(fetchOfferByIdAction(propId));
    store.dispatch(fetchReviewsByIdAction(propId));
  }, [propId]);


  const offer = offers.find((item) => item.id === propId) ?? null;

  if (offer === null) {
    return (
      <NotFoundScreen />
    );
  } if (isDataLoading) {
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
        reviews={reviews}
        offer={offer}
        nearbyOffers={nearbyOffers}
        offerId={propId}
      />
    </div>
  );
}

export default memo(OfferScreen);
