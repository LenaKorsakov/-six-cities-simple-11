import { ChangeEvent, FormEvent, useCallback, useState, memo } from 'react';
import RatingPicker from './rating-picker';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReviewSendingError, getReviewSendingStatus } from '../../store/offer-property-data/offer-property-data-selectors';
import { fetchReviewsByIdAction, sendReviewAction } from '../../store/api-actions';

import { validateReviewForm} from '../../utiles/validation';
import { RATING_TITLES, InitialReviewState, ReviewLength} from '../../const/review';

import { ReviewData } from '../../@types/store-types';
import { ReviewFormButtonText } from '../../const/buttons-text';

type ReviewFormProps = {
  offerId: number;
};

function ReviewsForm({offerId}: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState<ReviewData>({
    id: offerId,
    ...InitialReviewState
  }
  );

  const [isValid, setIsValid] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const isReviewSending = useAppSelector(getReviewSendingStatus);
  const isReviewSendingFailed = useAppSelector(getReviewSendingError);

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: event.target.value
    });

    setIsValid(validateReviewForm(formData));
  };

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: +event.target.value
    });

    setIsValid(validateReviewForm(formData));
  }, [formData]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(sendReviewAction(formData));

    if(!isReviewSendingFailed) {
      setFormData({
        id: offerId,
        ...InitialReviewState
      });

      dispatch(fetchReviewsByIdAction(offerId));

      setIsValid(false);
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

        {RATING_TITLES.map(({rating, title}) => (
          <RatingPicker
            rating={rating}
            title={title}
            key={`${rating}-${title}`}
            onInputChange={handleInputChange}
            isDisabled={isReviewSending}
            isChecked={rating === formData.rating}
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
          <b className="reviews__text-amount">{ReviewLength.Min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || isReviewSending}
        >
          {isReviewSending ? ReviewFormButtonText.Clicked : ReviewFormButtonText.Default}
        </button>
      </div>
    </form>
  );
}

export default memo(ReviewsForm);
