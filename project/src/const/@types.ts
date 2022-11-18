import { SortType } from './sort-type';

export type SortEnum = typeof SortType[keyof typeof SortType];
