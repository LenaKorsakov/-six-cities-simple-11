import HeaderLogo from '../../components/header/header-logo';
import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <HeaderLogo />
      <section className="locations locations--login locations--current">
        <h1>404. Page not found</h1>
        <Link className="locations__item-link" to="/">
          <span>Вернуться на главную</span>
        </Link>
      </section>
    </>
  );
}

export default NotFoundScreen;
