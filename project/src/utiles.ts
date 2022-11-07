const RATING_MAX = 5;

export const makeRatingWidth = (rating: number) => rating / RATING_MAX * 100;

export const formatDate = (date: string, locales = 'en-US') =>
  new Date(date).toLocaleString(locales, {month: 'long', year: 'numeric'});
