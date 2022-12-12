import { Link } from 'react-router-dom';
import {AppRoute} from '../../const/app-route';

function Logo(): JSX.Element {
  return (
    <div className="header__left">
      <Link className="header__logo-link header__logo-link--active" title = "To the main page" data-testid = "link" to={AppRoute.Main}>
        <img
          className="header__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={81}
          height={41}
        />
      </Link>
    </div>
  );
}

export default Logo;
