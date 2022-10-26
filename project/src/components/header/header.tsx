import Logo from './logo';
import UserName from './user-name';
import SignOut from './sign-out';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <UserName />
              <SignOut />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
