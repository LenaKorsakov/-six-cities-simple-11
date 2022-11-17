import type { Review, User } from '../../@types/review-types';
import { formatReviewDate, createRatingWidth} from '../../utiles/format';

type ReviewItemProps = {
 review: Review;
 user: User;
}
function ReviewItem({review, user}: ReviewItemProps): JSX.Element {
  const {comment, date, rating} = review;
  const {avatarUrl, name} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${createRatingWidth(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.toISOString()}>
          {formatReviewDate(date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
