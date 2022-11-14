import type { Review } from '../@types/review-types';

const reviews: Review[] = [
  {
    comment: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    date: '2022-11-13T16:15:36Z',
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
    date: '2022-08-11T16:15:36Z',
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
    date: '2022-09-15T16:15:36Z',
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
