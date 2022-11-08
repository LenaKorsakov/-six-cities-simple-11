import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import nearOffers from './mocks/near-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const data = {
  offers: offers,
  reviews: reviews,
  nearOffers: nearOffers
};

root.render(
  <React.StrictMode>
    <App
      offers={data.offers}
      reviews={data.reviews}
      nearOffers={nearOffers}
    />
  </React.StrictMode>,
);


