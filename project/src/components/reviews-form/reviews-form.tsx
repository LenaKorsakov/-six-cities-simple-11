import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { getReviewSendingError, getReviewSendingStatus } from '../../store/offer-property-data/offer-property-data-selectors';

import { MIN_REVIEW_LENGTH, validateReviewForm } from '../../utiles/validation';
import StarPicker from './star-picker';
import { StarNumber } from '../../const/star-number';
import { StarTitle } from '../../const/star-title';

import { sendReviewAction } from '../../store/api-actions';
import { ReviewData } from '../../store/@types';

const starPickerOptions = (Object.keys(StarNumber)
  .map((key: string) => ({
    rating: StarNumber[key as keyof typeof StarNumber],
    title: StarTitle[key as keyof typeof StarTitle]
  })));

type ReviewFormProps = {
  offerId: number;
}

function ReviewsForm({offerId}: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState<ReviewData>({
    id: offerId,
    comment: '',
    rating: 0}
  );

  const dispatch = useAppDispatch();

  const isReviewSending = useAppSelector(getReviewSendingStatus);
  const isReviewSendingError = useAppSelector(getReviewSendingError);
  const isFormDataValide = useMemo( () => validateReviewForm(formData), [formData]);

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

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(sendReviewAction(formData));

    if(!isReviewSendingError) {
      setFormData({
        id: offerId,
        comment: '',
        rating: 0
      });
    }
  };

  return(
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">

        {starPickerOptions.map((item) => (
          <StarPicker
            option={item}
            key={`${item.rating}-${item.title}`}
            onInputChange={handleInputChange}
            isDisabled={isReviewSending}
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
        disabled={isReviewSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>{' '}
            and describe your stay with at least{' '}
          <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isReviewSending && isFormDataValide}
        >
          {isReviewSending ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
