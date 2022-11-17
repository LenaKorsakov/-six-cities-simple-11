import ReviewItem from '../review-item/review-item';
import { StarNumber } from '../../const/star-number';
import { StarTitle } from '../../const/star-title';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import type { Review} from '../../@types/review-types';

type ReviewListProps = {
 reviews: Review[];
}

const starPickerOptions = (Object.keys(StarNumber)
  .map((key: string) => ({
    rating: StarNumber[key as keyof typeof StarNumber],
    title: StarTitle[key as keyof typeof StarTitle]
  })));

function ReviewList({reviews}: ReviewListProps): JSX.Element {

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
      <ReviewsForm options={starPickerOptions}/>
    </section>
  );
}

export default ReviewList;
