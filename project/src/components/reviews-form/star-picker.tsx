import { ChangeEvent} from 'react';
import type {Star} from '../../@types/star-types';

type StarPickerProps = {
  option: Star;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
};

function StarPicker({option, onInputChange, isDisabled}: StarPickerProps): JSX.Element {
  const {rating, title} = option;

  return(
    <div>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={onInputChange}
        disabled={isDisabled}
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
    </div>
  );
}

export default StarPicker;
