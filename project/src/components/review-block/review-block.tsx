import ReviewItem from '../review-item/review-item';
import ReviewsForm from '../reviews-form/reviews-form';
import { useAppSelector } from '../../hooks';

import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

import { AuthorizationStatus } from '../../const/authorization-status';

import type { Review} from '../../@types/review-types';

type ReviewBlockProps = {
 reviews: Review[];
 offerId: number;
}

function ReviewBlock({offerId, reviews}: ReviewBlockProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews && reviews.map((review) =>(
          <ReviewItem
            review={review}
            user={review.user}
            key={review.id}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm offerId={offerId} />}
    </section>
  );
}

export default ReviewBlock;
