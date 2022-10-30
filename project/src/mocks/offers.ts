import type { Offer } from '../@types/offer-types';

const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Air Conditioner'],
    host: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Anne'
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/apartment-02.jpg',
    price: 200,
    rating: 5,
    title: 'Nice and cosy place',
    type: 'Apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Wood and stone place.',
    goods: ['Heating', 'Air Conditioner', 'Boiler'],
    host: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Angelina'
    },
    id: 2,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isPremium: false,
    location: {
      latitude: 52.9683067306,
      longitude: 4.8787995950,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 100,
    rating: 3,
    title: 'Small place',
    type: 'Private room'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 48.5112,
        longitude: 2.2055,
        zoom: 10,
      },
      name: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    },
    description: 'Wood and stone place.',
    goods: ['Heating', 'Air Conditioner', 'Boiler', 'Kitchen'],
    host: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'John'
    },
    id: 3,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isPremium: true,
    location: {
      latitude: 48.3453535353,
      longitude: 2.2055757575,
      zoom: 5,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 130,
    rating: 5,
    title: 'Apartment with view',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 48.5112,
        longitude: 2.2055,
        zoom: 8,
      },
      name: 'Wonderfull, spacious, great furnished appartment near the Tour Eiffel',
    },
    description: 'Beautiful and luxurious studio at great location.',
    goods: ['Heating', 'Air Conditioner', 'Boiler', 'Kitchen'],
    host: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Elena'
    },
    id: 4,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isPremium: false,
    location: {
      latitude: 48.3576868699,
      longitude: 2.2075575755,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-03.jpg',
    price: 350,
    rating: 4,
    title: 'Apartment with great view',
    type: 'Apartment'
  }
];

export default offers;
