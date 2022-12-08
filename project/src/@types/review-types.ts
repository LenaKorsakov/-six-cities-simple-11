export type Review = {
    comment: string;
    date: Date;
    id: number;
    rating: number;
    user: User;
}

export type ReviewPost = Pick<Review, 'comment' | 'rating'>

export type User = {
  avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
}

export type ReviewRaw = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}
