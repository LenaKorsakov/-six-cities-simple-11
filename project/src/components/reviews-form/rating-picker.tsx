type RatingPickerProps = {
  rating: number;
  title: string;
  isDisabled: boolean;
  isChecked: boolean;//без данного атрибута "звездочки" не становятся серыми при отправки формы на сервер и сбросе формы, а так как на input нет onChange пришлось сделать его readOnly.
};

function RatingPicker({rating, title, isDisabled, isChecked}: RatingPickerProps): JSX.Element {

  return(
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        disabled={isDisabled}
        checked={isChecked} readOnly
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default RatingPicker;
