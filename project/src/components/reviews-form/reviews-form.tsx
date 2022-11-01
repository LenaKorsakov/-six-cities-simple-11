import StarPicker from './star-picker';
import { ChangeEvent, useState } from 'react';

import type {Star} from '../../@types/component-types';
import type {Review} from '../../@types/review-types';

type ReviewsFormProps = {
  options: Star[];
}

function ReviewsForm({options}: ReviewsFormProps): JSX.Element {

  const [formData, setFormData] = useState<Review>({
    comment: '',
    date: '',
    id: 0,
    rating: 0,
    user: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: ''
    }
  });

  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      comment: event.target.value
    });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      rating: +event.target.value
    });
  }
  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">

        {options.map((item) => (
          <StarPicker
            option={item}
            key={`${item.rating}-${item.title}`}
            onChange={handleInputChange}
          />
        )
        )}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        value={formData.comment}
        onChange = {handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
            and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
