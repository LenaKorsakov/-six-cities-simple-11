import { City } from '../../@types/offer-types';
import { SortEnum } from '../../const/@types';
import { NameSpace } from '../../const/name-spaces';
import { State } from '../@types';

export const getCity = (state: State): City => state[NameSpace.Offers].city;
export const getSort = (state: State): SortEnum => state[NameSpace.Offers].sortOption;
