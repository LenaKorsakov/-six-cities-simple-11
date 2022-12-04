export const RATING_TITLES = [
  {rating: 5, title: 'perfect'},
  {rating: 4, title: 'good'},
  {rating: 3, title: 'not bad'},
  {rating: 2, title: 'badly'},
  {rating: 1, title: 'terribly'}
];

export const REVIEW_MAX_COUNT = 10;

export const InitialReviewState = {
  comment: '',
  rating: 0
};

export const ReviewLength = {
  Min: 50,
  Max: 300
} as const;
