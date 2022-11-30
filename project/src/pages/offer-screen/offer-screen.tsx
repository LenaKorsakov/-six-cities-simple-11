import {Helmet} from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import OfferMain from '../../components/offer-main/offer-main';
import { store } from '../../store';

import { useAppSelector } from '../../hooks';
import type { Review } from '../../@types/review-types';
import { getAllOffers, getNearbyOffers, getOffersLoadingStatus } from '../../store/offers-data/offers-data-selectors';
import { fetchNearbyOffersAction, fetchOfferByIdAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';


type OfferScreenProps = {
  reviews: Review[];
}

function OfferScreen({reviews}: OfferScreenProps):JSX.Element {

  const nearbyOffers = useAppSelector(getNearbyOffers);
  const offers = useAppSelector(getAllOffers);
  const isDataLoading = useAppSelector(getOffersLoadingStatus);

  const {id} = useParams() as {id: string};
  const propId = +id;

  useEffect(() => {
    store.dispatch(fetchNearbyOffersAction(propId));
    store.dispatch(fetchOfferByIdAction(propId));
  }, [propId]);


  const offer = offers.find((item) => item.id === propId) ?? null;

  if (offer === null) {
    return (
      <NotFoundScreen/>
    );
  } if (isDataLoading) {
    return (
      <LoadingScreen/>
    );
  }
  return(
    <div className="page">
      <Helmet>
        <title>Шесть городов.Страничка апартаментов.</title>
      </Helmet>
      <Header />
      <OfferMain
        reviews={reviews}
        offer={offer}
        nearbyOffers={nearbyOffers}
      />
    </div>
  );
}

export default OfferScreen;
