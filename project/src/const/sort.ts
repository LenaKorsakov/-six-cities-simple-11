export enum Sort {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export const DEFAULT_SORT = Sort.Popular;

export const SORT_OPTIONS = Object.values(Sort);
