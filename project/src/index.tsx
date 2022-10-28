import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const data = {
  offersCount: 300,
};

root.render(
  <React.StrictMode>
    <App
      offersCount = {data.offersCount}
      offers = {offers}
    />
  </React.StrictMode>,
);


