import type { City } from '../@types/offer-types';

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const cities: City[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10
    },
    name: CityName.Paris,
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10
    },
    name: CityName.Cologne,
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10
    },
    name: CityName.Brussels,
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: CityName.Amsterdam,
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10
    },
    name: CityName.Hamburg,
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10
    },
    name: CityName.Dusseldorf,
  },
];


export const DEFAULT_CITY = cities[0];
