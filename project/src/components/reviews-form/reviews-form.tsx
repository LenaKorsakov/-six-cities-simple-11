import { ChangeEvent, useCallback, useState } from 'react';
import StarPicker from './star-picker';
import { StarNumber } from '../../const/star-number';
import { StarTitle } from '../../const/star-title';
import type { ReviewPost } from '../../@types/review-types';

const starPickerOptions = (Object.keys(StarNumber)
  .map((key: string) => ({
    rating: StarNumber[key as keyof typeof StarNumber],
    title: StarTitle[key as keyof typeof StarTitle]
  })));


function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState<ReviewPost>({
    comment: '',
    rating: 0}
  );

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: event.target.value
    });
  };

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: +event.target.value
    });
  }, [formData]);

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">

        {starPickerOptions.map((item) => (
          <StarPicker
            option={item}
            key={`${item.rating}-${item.title}`}
            onInputChange={handleInputChange}
          />
        )
        )}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange = {handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>{' '}
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
