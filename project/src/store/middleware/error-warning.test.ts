import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import { toast } from 'react-toastify';
import { displayError, displayInfo } from '../actions';
import { State } from '../../@types/store-types';
import { errorsWarning } from './errors-warning';

const middlewares = [errorsWarning];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: errorsWarning', () => {

  it('should be called toast.info function', () => {

    toast.info = jest.fn();

    store.dispatch(displayInfo('Informing text'));

    expect(toast.info).toBeCalledTimes(1);
  });

  it('should be called toast.warn function', () => {

    toast.warn = jest.fn();

    store.dispatch(displayError('Warning text'));

    expect(toast.warn).toBeCalledTimes(1);
  });
});
