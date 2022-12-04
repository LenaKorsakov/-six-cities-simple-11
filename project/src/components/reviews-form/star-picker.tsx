import { ChangeEvent} from 'react';

type StarPickerProps = {
  rating: number;
  title: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  isChecked: boolean;
};

function StarPicker({rating, title, onInputChange, isDisabled, isChecked}: StarPickerProps): JSX.Element {

  return(
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={onInputChange}
        disabled={isDisabled}
        checked={isChecked}
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
        style={{
          pointerEvents: isDisabled ? 'none' : 'auto'
        }}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default StarPicker;
