import { AuthorizationStatus } from '../../const/authorization-status';
import { NameSpace } from '../../const/name-space';
import { State, UserData } from '../@types';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUsersData = (state: State): UserData => state[NameSpace.User].user;
export const getIsLoginLoading = (state: State): boolean => state[NameSpace.User].isLoginLoading;
