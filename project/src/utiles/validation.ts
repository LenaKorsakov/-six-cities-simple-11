import { toast } from 'react-toastify';

const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{2,}$/;
const loginRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validateLogin = (value: string) => {
  if (!value.match(loginRegex)) {
    toast.info('Enter correct email');

    return false;
  }

  return true;
};

export const validatePassword = (value: string) => {
  if (!value.match(passwordRegex)) {
    toast.info('Password must contain at least one number and one letter');

    return false;
  }

  return true;
};
