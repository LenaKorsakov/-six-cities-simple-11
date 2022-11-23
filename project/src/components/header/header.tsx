import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const/authorization-status';
import HeaderLogoOnly from './header-logo-only';

import HeaderAuth from './header-auth';
import HeaderNoAuth from './header-no-auth';

function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);

  return (
    <HeaderLogoOnly>
      { authStatus === AuthorizationStatus.Auth && user
        ? <HeaderAuth user={user}/>
        : <HeaderNoAuth />}
    </HeaderLogoOnly>
  );
}

export default Header;
