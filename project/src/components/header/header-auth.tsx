import './header-avatar-picture.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutAction } from '../../store/api-actions';
import { getIsLoginLoading } from '../../store/user-process/user-process-selectors';
import { useAppDispatch } from '../../hooks';

import { AppRoute } from '../../const/app-route';

import { UserData } from '../../@types/store-types';

type HeaderAuthProps = {
  user: UserData;
}

function HeaderAuth({user}: HeaderAuthProps): JSX.Element {
  const {email, avatarUrl, name} = user;

  const isLoginLoading = useSelector(getIsLoginLoading);
  const dispatch = useAppDispatch();

  function handleNavigationItemClick() {
    dispatch(logoutAction());
  }

  return (
    <>
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img
              className="header__avatar-picture"
              src={avatarUrl}
              width={20}
              height={20}
              alt={name}
            />
          </div>
          <span className="header__user-name user__name">
            {email}
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
          <span className="header__signout">
            { isLoginLoading ? 'Sign out...' : 'Sign out' }
          </span>
        </Link>
      </li>
    </>
  );
}

export default HeaderAuth;
