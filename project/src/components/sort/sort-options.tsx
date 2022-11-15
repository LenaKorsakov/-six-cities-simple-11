import { useState } from 'react';
import { Sort } from '../../const/sort';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/actions';

function SortOptions(): JSX.Element {
  const sortOptions = Object.values(Sort);

  const selectedSortOption = useAppSelector((state)=> state.sortOption);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  function handleSort() {
    setIsOpened(!isOpened);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">
      Sort by
      </span> {' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSort}
      >
        {selectedSortOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>

        {sortOptions.map((option, index)=> {
          const keyValue = `${option}-${index}`;

          return (
            <li
              key={keyValue}
              className={`places__option ${option === selectedSortOption ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={()=> dispatch(changeSort(option))}
            >
              {option}
            </li>);
        })}
      </ul>
    </form>
  );
}
//TODO добавить функции для канждого варианта сортировки, сортировать через них offers. Где хранить такие функции? в константном перечислении под теми же ключами?
//TODO закрытие по клику вне меню, по нажатию клавиши эскейп. Использовать useEffect на документе? (не понимаю, как из него добавить класс элементу? )
export default SortOptions;
