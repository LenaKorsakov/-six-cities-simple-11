import {Helmet} from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import HeaderSignIn from '../../components/header/header-sign-in';
import OfferMain from '../../components/offer-main/offer-main';

import { useAppSelector } from '../../hooks';
import type { Review } from '../../@types/review-types';

type OfferScreenProps = {
  reviews: Review[];
}

function OfferScreenNotLogged({reviews}: OfferScreenProps):JSX.Element {

  const nearbyOffers = useAppSelector((state)=> state.nearbyOffers);
  const offers = useAppSelector((state)=> state.offers);

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
      <HeaderSignIn />
      <OfferMain
        reviews={reviews}
        offer={offer}
        nearbyOffers={nearbyOffers}
      />
    </div>
  );
}

export default OfferScreenNotLogged;
