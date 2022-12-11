import { userProcess } from './user-process';
import { loginAction, logoutAction, checkAuthAction } from '../api-actions';
import { UserData, UserProcess } from '../../@types/store-types';
import { AuthorizationStatus } from '../../const/authorization-status';
import { makeFakeUserData } from '../../utiles/mocks';

const fakeUserData = makeFakeUserData();

describe('Reducer: userProcess', () => {

  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: {} as UserData,
      isLoginLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('checkAuthAction test', () => {

    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.fulfilled.type, payload: fakeUserData}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, user: fakeUserData, isLoginLoading: false});
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.rejected.type}))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });
  describe('loginAction test', () => {

    it('should update authorizationStatus to "AUTH", isLoginLoading to false and return userData if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: loginAction.fulfilled.type, payload: fakeUserData}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, user: fakeUserData, isLoginLoading: false});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, {type: loginAction.rejected.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, user: {}, isLoginLoading: false});
    });
    it('should update isLoginLoading to true if loginAction pending', () => {
      expect(userProcess.reducer(state, {type: loginAction.pending.type}))
        .toEqual({...state, isLoginLoading: true});
    });
  });

  describe('logoutAction test', () => {

    it('should update authorizationStatus to "NO_AUTH" and isLoginLoading to false if logoutAction fulfilled and delete userData', () => {
      expect(userProcess.reducer(state, {type: logoutAction.fulfilled.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, user: {}, isLoginLoading: false});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, {type: loginAction.rejected.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, user: {}, isLoginLoading: false});
    });
    it('should update isLoginLoading to true if logoutAction pending', () => {
      expect(userProcess.reducer(state, {type: logoutAction.pending.type}))
        .toEqual({...state, isLoginLoading: true});
    });
  });
});
