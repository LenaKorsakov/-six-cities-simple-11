import type {Star} from '../../@types/component-types';
import { ChangeEvent} from 'react';

type StarPickerProps = {
  option: Star;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;//Д9. Колбэки, переданные в props названы через on
};

function StarPicker({option, onInputChange}: StarPickerProps): JSX.Element {
  const {rating, title} = option;

  return(
    <div>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={onInputChange}// Так можно работать с колбэками, переданными в props? Не нарушаю Д2? Методы-обработчики классов названы через handle?
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
