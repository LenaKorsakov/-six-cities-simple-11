import type { Review } from '../@types/review-types';

const reviews: Review[] = [
  {
    comment: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    date: '21.10.2022',
    id: 1,
    rating: 4.5,
    user: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Alex'
    }
  },
  {
    comment: 'Flowery and colorful.',
    date: '22.09.2022',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Alla'
    },
  },
  {
    comment: 'Too small',
    date: '11.08.2022',
    id: 3,
    rating: 2,
    user: {
      avatarUrl: 'avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Mike'
    },
  }
];

export default reviews;
