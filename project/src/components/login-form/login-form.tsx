import { FormEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { LoginFormButtonText } from '../../const/buttons-text';
import { WarningMessage } from '../../const/warning-message';
import { useAppDispatch} from '../../hooks';
import { displayInfo } from '../../store/actions';
import { loginAction } from '../../store/api-actions';
import { getIsLoginLoading } from '../../store/user-process/user-process-selectors';

const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{2,}$/;
const loginRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validatePassword = (value: string) => {
  if (!value.match(passwordRegex)) {
    return WarningMessage.ValidatePassword;
  }

  return '';
};

const validateLogin = (value: string) => {
  if (!value.match(loginRegex)) {
    return WarningMessage.ValidateLogin;
  }

  return '';
};


function LoginForm(): JSX.Element{
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isLoginLoading = useSelector(getIsLoginLoading);
  const dispatch = useAppDispatch();

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {

      const errorMessage = validatePassword(passwordRef.current.value) || validateLogin(emailRef.current.value);

      if (errorMessage.length > 0) {
        dispatch(displayInfo(errorMessage));
      } else {
        dispatch(loginAction({
          login: emailRef.current.value,
          password: passwordRef.current.value
        }));
      }}
  }

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action=""
        method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            ref={emailRef}
            className="login__input form__input"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            ref={passwordRef}
            className="login__input form__input"
            type="password"
            name="password"
            autoComplete='off'
            placeholder="Password"
            required
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
        >
          { isLoginLoading ? LoginFormButtonText.Clicked : LoginFormButtonText.Default }
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
