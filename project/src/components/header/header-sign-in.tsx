import Logo from './logo';
import SignIn from './sign-in';

function HeaderSignIn(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <SignIn />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderSignIn;
