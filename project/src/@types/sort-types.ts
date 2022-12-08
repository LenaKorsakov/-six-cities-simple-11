import { SortType } from '../const/sort-type';

export type SortEnum = typeof SortType[keyof typeof SortType];
