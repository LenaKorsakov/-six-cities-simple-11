import {createAction} from '@reduxjs/toolkit';
import { Action } from '../const/action';
import { AppRoute } from '../const/app-route';

export const redirectToRoute = createAction<AppRoute>(Action.RedirectToRoute);
export const validateForm = createAction<string>(Action.ValidateForm);
