import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../@types/offer-types';
import { SortEnum } from '../../const/@types';
import { DEFAULT_CITY } from '../../const/city-name';
import { NameSpace } from '../../const/name-space';
import { DEFAULT_SORT } from '../../const/sort-type';
import { OffersProcess} from '../@types';

const initialState: OffersProcess = {
  city: DEFAULT_CITY,
  sortOption: DEFAULT_SORT
};

export const offersProcess = createSlice({
  name: NameSpace.CityData,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortEnum>) => {
      state.sortOption = action.payload;
    }
  }
});


export const {changeCity, changeSort} = offersProcess.actions;
