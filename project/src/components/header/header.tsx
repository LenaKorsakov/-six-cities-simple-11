import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const/authorization-status';
import HeaderLogoOnly from './header-logo-only';

import HeaderAuth from './header-auth';
import HeaderNoAuth from './header-no-auth';
import { getAuthorizationStatus, getUsersData } from '../../store/user-process/user-process-selectors';

function Header(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUsersData);

  return (
    <HeaderLogoOnly>
      { authStatus === AuthorizationStatus.Auth && user
        ? <HeaderAuth user={user}/>
        : <HeaderNoAuth />}
    </HeaderLogoOnly>
  );
}

export default Header;
