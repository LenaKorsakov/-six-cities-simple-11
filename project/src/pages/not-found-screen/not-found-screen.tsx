import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import HeaderLogo from '../../components/header/header-logo';
import {AppRoute} from '../../enum/app-route';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Страница не найдена!</title>
      </Helmet>
      <HeaderLogo />
      <div className="container property__wrapper">
        <h1 className="property__name">404. Page not found</h1>

        <Link title="На главную" to={AppRoute.Main}>
          <div className="property__mark">Вернуться на главную</div>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundScreen;
