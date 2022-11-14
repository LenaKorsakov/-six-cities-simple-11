import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import nearOffers from './mocks/near-offers';
import {store} from '../src/store/index';

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
    <Provider store={store}>
      <App
        offers={data.offers}
        reviews={data.reviews}
        nearOffers={nearOffers}
      />
    </Provider>
  </React.StrictMode>,
);


