import Logo from './logo';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
        </div>
      </div>
    </header>
  );
}

export default Header;
