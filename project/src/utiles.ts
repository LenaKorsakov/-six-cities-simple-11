const RATING_MAX = 5;

export const makeRatingWidth = (rating: number) => Math.round(rating) / RATING_MAX * 100;

export const formatDate = (date: string, locales = 'en-US') =>
  new Date(date).toLocaleString(locales, {month: 'long', year: 'numeric'});

export const convertDate = (date: string) => new Date(date).toISOString();

export const formatNumber = (value: number, locale = 'en') => value.toLocaleString(locale);
