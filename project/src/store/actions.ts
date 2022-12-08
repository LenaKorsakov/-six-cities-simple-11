import {createAction} from '@reduxjs/toolkit';
import { Action } from '../const/action';
import { AppRoute } from '../const/app-route';

export const redirectToRoute = createAction<AppRoute>(Action.RedirectToRoute);
export const displayInfo = createAction<string>(Action.ValidateForm);
export const displayError = createAction<string>(Action.DisplayError);
