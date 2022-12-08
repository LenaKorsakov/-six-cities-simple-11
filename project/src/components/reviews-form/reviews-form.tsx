import { ChangeEvent, useState, memo, FormEvent } from 'react';
import RatingPicker from './rating-picker';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkIsReviewFormBlocked, checkReviewSendingStatus } from '../../store/offer-property-data/offer-property-data-selectors';
import { sendReviewAction } from '../../store/api-actions';

import { RATING_TITLES, InitialReviewState, ReviewLength} from '../../const/review';
import { ReviewFormButtonText } from '../../const/buttons-text';
import { ReviewSendingStatus } from '../../const/review-sending-status';

import { ReviewPost } from '../../@types/review-types';

type ReviewFormProps = {
  offerId: number;
};

function ReviewsForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<ReviewPost>(InitialReviewState);

  const isReviewFormBloked = useAppSelector(checkIsReviewFormBlocked);
  const reviewSendingStatus = useAppSelector(checkReviewSendingStatus);

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: event.target.value
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: +event.target.value
    });
  };


  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(sendReviewAction({
      ...formData,
      id: offerId
    }));

    if (reviewSendingStatus !== ReviewSendingStatus.Rejected) {
      setFormData(InitialReviewState);
    }
  };

  const isButtonDisabled = formData.comment.length < ReviewLength.Min || formData.comment.length > ReviewLength.Max || formData.rating === 0;

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
      <div
        className="reviews__rating-form form__rating"
        onChange={handleInputChange}
      >

        {RATING_TITLES.map(({rating, title}) => (
          <RatingPicker
            rating={rating}
            title={title}
            key={`${rating}-${title}`}
            isDisabled={isReviewFormBloked}
            isChecked={formData.rating === rating}
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
        disabled={isReviewFormBloked}
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
          disabled={isButtonDisabled || isReviewFormBloked}
        >
          {isReviewFormBloked ? ReviewFormButtonText.Clicked : ReviewFormButtonText.Default}
        </button>
      </div>
    </form>
  );
}

export default memo(ReviewsForm);
