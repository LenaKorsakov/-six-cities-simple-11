import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Data = {
  OffersCount: 300
} as const;

root.render(
  <React.StrictMode>
    <App
      offersCount = {Data.OffersCount}
    />
  </React.StrictMode>,
);
