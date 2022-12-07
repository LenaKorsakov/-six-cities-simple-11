import { toast } from 'react-toastify';
import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import {rootReducer} from '../root-reducer';
import { Action } from '../../const/action';

type Reducer = ReturnType<typeof rootReducer>;

export const errorsWarning: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === Action.ValidateForm) {
          toast.info(action.payload);
        }

        if (action.type === Action.DisplayError) {
          toast.warn(action.payload);
        }

        return next(action);
      };
