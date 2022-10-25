import { Link } from 'react-router-dom';

function SignOut(): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="/">
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignOut;
