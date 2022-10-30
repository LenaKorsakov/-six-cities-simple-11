import type {Star} from '../../@types/component-types';

type StarPickerProps = Star;

function StarPicker({rating, title}: StarPickerProps): JSX.Element {

  return(
    <div>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={rating}
        id={`${rating}-stars`}
        type="radio"
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
