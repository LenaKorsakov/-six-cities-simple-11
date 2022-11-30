import { FormEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch} from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getIsLoginLoading } from '../../store/user-process/user-process-selectors';
import { checkHasNumberAndLetter, checkNotEmpty } from '../../utiles/validation';

function LoginForm(): JSX.Element{
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isLoginLoading = useSelector(getIsLoginLoading);
  const dispatch = useAppDispatch();

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(emailRef.current !== null && passwordRef.current !== null) {
      if(checkNotEmpty(emailRef.current.value)
        && checkNotEmpty(passwordRef.current.value)
        && checkHasNumberAndLetter(passwordRef.current.value)) {

        dispatch(loginAction({
          login: emailRef.current.value,
          password: passwordRef.current.value
        }));
      }
    }
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
            type="email"
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
          { isLoginLoading ? 'Sign in...' : 'Sign in' }
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
