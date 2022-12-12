import {render, screen} from '@testing-library/react';
import Logo from './logo';
import HistoryRoute from '../history-route/history-route';
import {createMemoryHistory} from 'history';
import {Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();
describe('Component: Logo', () => {
  it('should render correctly', () => {

    render(
      <HistoryRoute history={history}>
        <Logo />
      </HistoryRoute>
    );

    const imageElement = screen.getByAltText(/6 cities logo/i);
    expect(imageElement).toBeInTheDocument();
  });

  it('should redirect to the main page when user click on the link', async () => {
    history.push('/logo');

    render(
      <HistoryRoute history={history}>
        <Routes>
          <Route
            path='/logo'
            element={<Logo />}
          />
          <Route
            path={AppRoute.Main}
            element={<h1>Main screen!</h1>}
          />
        </Routes>
      </HistoryRoute>
    );

    await userEvent.click(screen.getByTestId('link'));
    expect(screen.getByText(/Main screen!/i)).toBeInTheDocument();
  });
});
