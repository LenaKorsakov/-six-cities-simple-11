import type { ReviewRaw } from '../@types/review-types';
import type { Review } from '../@types/review-types';

export const adaptReview = (review: ReviewRaw): Review => (
  {
    ...review,
    date: new Date (review.date)
  }
);
