import type { SortEnum } from '../@types/sort-types';

export const SortType = {
  Popular: 'Popular',
  PriseLowToHight: 'Price: low to high',
  PriceHightToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first'
} as const;

export const DEFAULT_SORT: SortEnum = SortType.Popular;

export const SORT_OPTIONS = Object.values(SortType);
