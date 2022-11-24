import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import { useAppDispatch } from '../../hooks';
import { UserData } from '../../store/@types';
import { setUserData } from '../../store/actions';
import { logoutAction } from '../../store/api-actions';

type HeaderAuthProps = {
  user: UserData;
}

function HeaderAuth({user}: HeaderAuthProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleNavigationItemClick() {
    dispatch(logoutAction());

    dispatch(setUserData(null));// TODO нужно ли это действие на выходе? Если при следующей авторизации предыдущий login затрется?
  }

  return (
    <>
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__user-name user__name">
            {user.email}
          </span>
        </div>
      </li>
      <li
        className="header__nav-item"
        onClick={handleNavigationItemClick}
      >
        <Link
          className="header__nav-link"
          to={AppRoute.Main}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default HeaderAuth;
