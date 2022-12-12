import {render, screen} from '@testing-library/react';
import HeaderLogoOnly from './header-logo-only';
import HistoryRoute from '../history-route/history-route';
import {createMemoryHistory} from 'history';

const history = createMemoryHistory();
describe('Component: Header-logo-only', () => {
  it('should render correctly', () => {

    render(
      <HistoryRoute history={history}>
        <HeaderLogoOnly />
      </HistoryRoute>
    );

    const imageElement = screen.getByAltText(/6 cities logo/i);
    expect(imageElement).toBeInTheDocument();

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
