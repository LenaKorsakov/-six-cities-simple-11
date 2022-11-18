import type { SortEnum } from './@types';

export const SortType = {
  Popular: 'Popular',
  PriseLowToHight: 'Price: low to high',
  PriceLowToHight: 'Price: high to low',
  TopRatedFirst: 'Top rated first'
} as const;

export const DEFAULT_SORT: SortEnum = SortType.Popular;

export const SORT_OPTIONS = Object.values(SortType);
