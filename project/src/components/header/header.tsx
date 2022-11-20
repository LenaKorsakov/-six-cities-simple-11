import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const/authorization-status';
import HeaderLogoOnly from './header-logo-only';

import SignOut from './sign-out';
import SignIn from './sign-in';

function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  function getHeadersChildren(): JSX.Element | null{
    if (authStatus === AuthorizationStatus.Auth) {
      return <SignOut />;
    } if (authStatus === AuthorizationStatus.NoAuth) {
      return <SignIn />;
    }
    return null;
  }

  return (
    //нужные компоненты не рендерятся в children, нужна подсказка
    <HeaderLogoOnly {...getHeadersChildren()}/>
  );
}

export default Header;
