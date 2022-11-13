const RATING_MAX = 5;

export const makeRatingWidth = (rating: number) => Math.round(rating) / RATING_MAX * 100;

export const formatDate = (ISOdate: string, locales = 'en-US') =>
  new Date(ISOdate).toLocaleString(locales, {month: 'long', year: 'numeric'});

export const formatNumber = (value: number, locale = 'en') => value.toLocaleString(locale);
