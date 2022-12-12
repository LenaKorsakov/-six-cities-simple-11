import { Link } from 'react-router-dom';
import {AppRoute} from '../../const/app-route';

function HeaderNoAuth(): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" title="To the login page" to={AppRoute.Login} data-testid="header-link">
        <span className="header__signout">Sign in</span>
      </Link>
    </li>
  );
}

export default HeaderNoAuth;
