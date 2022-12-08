import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

import Header from '../../components/header/header';
import {AppRoute} from '../../const/app-route';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Six cities. Page not found.</title>
      </Helmet>
      <Header />
      <div className="container property__wrapper">
        <h1 className="property__name">404. Page not found</h1>

        <Link title="To the main page" to={AppRoute.Main}>
          <div className="property__mark">Вернуться на главную</div>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundScreen;
