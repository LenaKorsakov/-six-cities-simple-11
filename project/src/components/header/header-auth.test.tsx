import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {AnyAction} from 'redux';
import userEvent from '@testing-library/user-event';
import HistoryRoute from '../../components/history-route/history-route';
import HeaderAuth from './header-auth';
import { makeFakeUserData } from '../../utiles/mocks';
import { createAPI } from '../../services/api';
import { AuthorizationStatus } from '../../const/authorization-status';
import { State } from '../../@types/store-types';

const fakeUserData = makeFakeUserData();

const fakeState = {USER: {
  authorizationStatus: AuthorizationStatus.Auth,
  user: fakeUserData}
};

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const fakeStore = configureMockStore<State, AnyAction>(middlewares);

const store = fakeStore(fakeState);

describe('Component: HeaderAuth', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <HelmetProvider>
            <HeaderAuth user={fakeUserData} />
          </HelmetProvider>
        </HistoryRoute>
      </Provider>,
    );

    const spanElement = screen.getByText(/Sign out/i);
    const emailElement = screen.getByText(fakeUserData.email);

    expect(spanElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should dispath logout action when user click on Sign Out', async () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <HelmetProvider>
            <HeaderAuth user={fakeUserData} />
          </HelmetProvider>
        </HistoryRoute>
      </Provider>,
    );

    await userEvent.click(screen.getByTestId('nav-item'));
    const actions = store.getActions();

    expect(actions[0].type).toBe('user/logout/pending');
  });
});
