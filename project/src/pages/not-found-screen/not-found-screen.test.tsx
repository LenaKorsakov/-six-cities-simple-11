import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRoute from '../../components/history-route/history-route';
import NotFoundScreen from './not-found-screen';
import { makeFakeUserData } from '../../utiles/mocks';
import { AuthorizationStatus } from '../../const/authorization-status';

const mockStore = configureMockStore();

const fakeUserData = makeFakeUserData();

const fakeState = {USER: {
  authorizationStatus: AuthorizationStatus.Auth,
  user: fakeUserData}
};

const store = mockStore(fakeState);


describe('Component: NotFoundScreen', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <HelmetProvider>
            <NotFoundScreen />
          </HelmetProvider>
        </HistoryRoute>
      </Provider>,
    );

    const headerElement = screen.getByText(/404. Page not found/i);
    const linkElement = screen.getByText(/Вернуться на главную/i);

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
