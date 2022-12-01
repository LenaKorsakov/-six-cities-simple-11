import { toast } from 'react-toastify';
import { ReviewPost } from '../@types/review-types';

const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{2,}$/;
const loginRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const MAX_REVIEW_LENGTH = 300;
export const MIN_REVIEW_LENGTH = 50;

export const validateLogin = (value: string) => {
  if (!value.match(loginRegex)) {
    toast.info('Enter correct email');

    return false;
  }

  return true;
};//добавила для однообразия

export const validatePassword = (value: string) => {
  if (!value.match(passwordRegex)) {
    toast.info('Password must contain at least one number and one letter');

    return false;
  }

  return true;
};


export const validateReviewForm = (review: ReviewPost) => {
  if (review.rating === 0) {
    toast.info('Rating is required');

    return false;
  }
  if (review.comment.trim().length < MIN_REVIEW_LENGTH) {
    toast.info(`Review must contain at least ${MIN_REVIEW_LENGTH} characters`);

    return false;
  }
  if (review.comment.trim().length > MAX_REVIEW_LENGTH) {
    toast.info(`Review must be less than ${MAX_REVIEW_LENGTH} characters`);

    return false;
  }

  return true;
};
