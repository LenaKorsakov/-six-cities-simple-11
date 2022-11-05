import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const data = {
  offersCount: 300,
  offers: offers,
};

root.render(
  <React.StrictMode>
    <App
      offers = {data.offers}
    />
  </React.StrictMode>,
);


