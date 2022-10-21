import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const OffersInfo = {
  OffersCount: 300
} as const;

root.render(
  <React.StrictMode>
    <App
      offersCount={OffersInfo.OffersCount}
    />
  </React.StrictMode>,
);
