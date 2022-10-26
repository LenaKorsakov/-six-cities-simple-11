function UserName(): JSX.Element {
  return (
    <li className="header__nav-item user">
      <div className="header__nav-profile">
        <div className="header__avatar-wrapper user__avatar-wrapper" />
        <span className="header__user-name user__name">
          Oliver.conner@gmail.com
        </span>
      </div>
    </li>
  );
}

export default UserName;
