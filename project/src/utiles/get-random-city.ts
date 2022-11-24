import { City } from '../@types/offer-types';

export const getRandomCity = (arr: City[]): City => arr[Math.floor(Math.random() * arr.length)];

