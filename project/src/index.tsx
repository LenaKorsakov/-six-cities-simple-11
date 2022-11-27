import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import reviews from './mocks/reviews';
import { cities } from './const/city-name';
import {store} from '../src/store/index';

import 'react-toastify/dist/ReactToastify.css';
import { checkAuthAction, fetchAllOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());

store.dispatch(fetchAllOffersAction());

const data = {
  cities: cities,
  reviews: reviews,
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App
        cities={data.cities}
        reviews={data.reviews}
      />
    </Provider>
  </React.StrictMode>,
);


