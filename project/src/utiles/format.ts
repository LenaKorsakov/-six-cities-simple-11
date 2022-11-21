const RATING_MAX = 5;

export const createRatingWidth = (rating: number) => Math.round(rating) / RATING_MAX * 100;

export const formatReviewDate = (date: Date, locales = 'en-US') => date.toLocaleString(locales, {month: 'long', year: 'numeric'});

export const formatPrice = (value: number, locale = 'en') => value.toLocaleString(locale);

export const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase().concat(value.slice(1));
