import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import Header from './header';
import HistoryRoute from '../../components/history-route/history-route';
import { makeFakeUserData } from '../../utiles/mocks';
import { AuthorizationStatus } from '../../const/authorization-status';

const mockStore = configureMockStore();

const fakeUserData = makeFakeUserData();

describe('Component: Header', () => {

  it('should render auth vesion of header, if user was log in', () => {
    const history = createMemoryHistory();

    const stateAuth = {USER: {
      authorizationStatus: AuthorizationStatus.Auth,
      user: fakeUserData}
    };

    render(
      <Provider store={mockStore(stateAuth)}>
        <HistoryRoute history={history}>
          <HelmetProvider>
            <Header />
          </HelmetProvider>
        </HistoryRoute>
      </Provider>,
    );

    const spanElement = screen.getByText(/Sign out/i);
    const imageElement = screen.getByAltText(`${fakeUserData.name}`);

    expect(spanElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  it('should render noAuth vesion of header, if user was not log in', () => {
    const history = createMemoryHistory();

    const stateNoAuth = {USER: {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: {}}
    };

    render(
      <Provider store={mockStore(stateNoAuth)}>
        <HistoryRoute history={history}>
          <HelmetProvider>
            <Header />
          </HelmetProvider>
        </HistoryRoute>
      </Provider>,
    );

    const spanElement = screen.getByText(/Sign in/i);
    expect(spanElement).toBeInTheDocument();
  });
});
