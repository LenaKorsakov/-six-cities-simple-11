export const RATING_TITLES = [
  {rating: 5, title: 'perfect'},
  {rating: 4, title: 'good'},
  {rating: 3, title: 'not bad'},
  {rating: 2, title: 'badly'},
  {rating: 1, title: 'terribly'}
];

export const ReviewCount = {
  Start: 0,
  End: 10
} as const;

export const InitialReviewState = {
  comment: '',
  rating: 0
};

export const ReviewLength = {
  Min: 50,
  Max: 300
} as const;
