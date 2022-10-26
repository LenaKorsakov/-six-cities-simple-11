import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const data = {
  offersCount: 300,
  offers:[
    {
      id: 1,
      src: 'img/room.jpg',
      isPremium: true,
      price: 120,
      title: 'Wood and stone place',
      type: 'Apartment',
      rating: 4
    },
    {
      id: 2,
      src: 'img/apartment-02.jpg',
      isPremium: false,
      price: 80,
      title: 'Wood and stone place',
      type: 'Private room',
      rating: 3
    },
    {
      id: 3,
      src: 'img/apartment-01.jpg',
      isPremium: false,
      price: 665,
      title: 'Nice place',
      type: 'Apartment',
      rating: 4
    },
    {
      id: 4,
      src: 'img/room.jpg',
      isPremium: true,
      price: 399,
      title: 'Wood and stone place',
      type: 'Apartment',
      rating: 2
    },
    {
      id: 5,
      src: 'img/room.jpg',
      isPremium: false,
      price: 100,
      title: 'Nice place',
      type: 'Private room',
      rating: 1
    },
  ]
};

root.render(
  <React.StrictMode>
    <App
      offersCount = {data.offersCount}
      offers = {data.offers}
    />
  </React.StrictMode>,
);


