import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const/authorization-status';
import HeaderLogoOnly from './header-logo-only';

import SignOut from './sign-out';
import SignIn from './sign-in';

function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <HeaderLogoOnly>
      { authStatus === AuthorizationStatus.Auth
        ? <SignOut />
        : <SignIn />}
    </HeaderLogoOnly>
  );
}

export default Header;
