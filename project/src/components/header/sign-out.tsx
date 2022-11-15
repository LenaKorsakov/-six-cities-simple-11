import { Link } from 'react-router-dom';
import {AppRoute} from '../../const/app-route';

function SignOut(): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" title="На главную" to={AppRoute.Main}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignOut;
