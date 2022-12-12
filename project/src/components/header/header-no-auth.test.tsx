import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Route, Routes} from 'react-router-dom';
import HistoryRoute from '../history-route/history-route';
import HeaderNoAuth from './header-no-auth';
import { AppRoute } from '../../const/app-route';

const history = createMemoryHistory();
describe('Component: HeaderNoAuth', () => {
  it('should render correctly', () => {

    render(
      <HistoryRoute history={history}>
        <HeaderNoAuth />
      </HistoryRoute>
    );

    const spanElement = screen.getByText(/Sign in/i);
    expect(spanElement).toBeInTheDocument();
  });

  it('should redirect to the login page when user click on the link', async () => {
    history.push('/header');

    render(
      <HistoryRoute history={history}>
        <Routes>
          <Route
            path='/header'
            element={<HeaderNoAuth />}
          />
          <Route
            path={AppRoute.Login}
            element={<h1>Login screen!</h1>}
          />
        </Routes>
      </HistoryRoute>
    );

    await userEvent.click(screen.getByTestId('header-link'));
    expect(screen.getByText(/Login screen!/i)).toBeInTheDocument();
  });
});
