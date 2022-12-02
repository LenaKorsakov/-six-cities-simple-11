export const RATING_TITLES = [
  {rating: '5', title: 'perfect'},
  {rating: '4', title: 'good'},
  {rating: '3', title: 'not bad'},
  {rating: '2', title: 'badly'},
  {rating: '1', title: 'terribly'}
];

export const MAX_REVIEWS_COUNT = 9;
export const MIN_REVIEWS_COUNT = 0;

export const InitialReviewState = {
  comment: '',
  rating: 0
} as const;
