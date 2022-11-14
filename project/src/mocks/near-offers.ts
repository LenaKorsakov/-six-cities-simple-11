import type { Offer } from '../@types/offer-types';

const nearOffers: Offer[] = [
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
    description: 'fgkjfdlkjghfdlkjghdfljkghdflkjgh',
    goods: ['Heating', 'Air Conditioner', 'Boiler'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 7,
      isPro: false,
      name: 'Angelina'
    },
    id: 1,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isPremium: false,
    location: {
      latitude: 52.5509553943508,
      longitude: 4.60309666406198,
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
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'dklrjghdljkghdljrghdljhg',
    goods: ['Heating', 'Air Conditioner', 'Boiler', 'Kitchen'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'John'
    },
    id: 3,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isPremium: true,
    location: {
      latitude: 52.4009553943508,
      longitude: 4.989309666406198,
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
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 8,
      },
      name: 'Amsterdam',
    },
    description: 'afhskfhsljghsljfkhslkjdfhslkjfhskjfhskf',
    goods: ['Heating', 'Air Conditioner', 'Boiler', 'Kitchen', 'Heating', 'Air Conditioner', 'Boiler', 'Kitchen'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Elena'
    },
    id: 9,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    isPremium: false,
    location: {
      latitude: 52.4209553943508,
      longitude: 4.999309666406198,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-03.jpg',
    price: 350,
    rating: 4,
    title: 'afhskfhsljghsljfkhslkjdfhslkjfhskjfhskf',
    type: 'Apartment'
  }
];

export default nearOffers;
