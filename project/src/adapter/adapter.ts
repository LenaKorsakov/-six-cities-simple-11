import type { Review } from '../@types/review-types';
import type { ReviewAdapter } from '../@types/review-types';

export const getAdaptedReview = (review: Review): ReviewAdapter => (
  {
    ...review,
    date: new Date (review.date)
  }
);
