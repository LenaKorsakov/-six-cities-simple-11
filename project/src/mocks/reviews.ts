import type { Review } from '../@types/review-types';

const reviews: Review[] = [
  {
    comment: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    date: 'Mon Nov 07 2022 17:05:29 GMT+0100 (Центральная Европа, стандартное время)',
    id: 1,
    rating: 4.5,
    user: {
      avatarUrl:'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Alex'
    }
  },
  {
    comment: 'Flowery and colorful.',
    date: 'Mon Sep 11 2022 17:05:29 GMT+0100 (Центральная Европа, стандартное время)',
    id: 2,
    rating: 3,
    user: {
      avatarUrl:'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Alla'
    },
  },
  {
    comment: 'Too small',
    date: 'Mon Dec 24 2021 17:05:29 GMT+0100 (Центральная Европа, стандартное время)',
    id: 3,
    rating: 2,
    user: {
      avatarUrl:'img/avatar-max.jpg',
      id: 3,
      isPro: true,
      name: 'Mike'
    },
  }
];

export default reviews;
