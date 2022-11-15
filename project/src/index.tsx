import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import reviews from './mocks/reviews';
import { cities } from '../src/const/city-names';
import {store} from '../src/store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const data = {
  cities: cities,
  reviews: reviews,
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities={data.cities}
        reviews={data.reviews}
      />
    </Provider>
  </React.StrictMode>,
);


