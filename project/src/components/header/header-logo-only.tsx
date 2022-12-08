import { PropsWithChildren } from 'react';
import Logo from './logo';

type HeaderProps = PropsWithChildren;

function HeaderLogoOnly({children}: HeaderProps): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {children}
        </div>
      </div>
    </header>
  );
}

export default HeaderLogoOnly;
