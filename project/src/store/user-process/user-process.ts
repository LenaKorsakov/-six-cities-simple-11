import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/name-space';
import { AuthorizationStatus } from '../../const/authorization-status';
import { UserData, UserProcess } from '../../@types/store-types';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {} as UserData,
  isLoginLoading: false
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.isLoginLoading = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLoginLoading = false;
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoginLoading = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLoginLoading = false;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLoginLoading = true;
      });
  }
});
