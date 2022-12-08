import { City } from '../../@types/offer-types';
import { SortEnum } from '../../@types/sort-types';
import { NameSpace } from '../../const/name-space';
import { State } from '../../@types/store-types';

export const getCity = (state: State): City => state[NameSpace.Offers].city;
export const getSort = (state: State): SortEnum => state[NameSpace.Offers].sortOption;
