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
