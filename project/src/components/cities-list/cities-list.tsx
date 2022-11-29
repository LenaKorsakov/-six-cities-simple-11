import { memo, useCallback, MouseEvent} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offers-process/offers-process';
import type { City, CityName } from '../../@types/offer-types';

type CitiesListProps ={
  cities: City[];
  selectedCityName: CityName;
}

function CitiesList({cities, selectedCityName}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = useCallback(
    (event: MouseEvent<HTMLLIElement>) => {
      event.preventDefault();

      const currentCityName = event.currentTarget.textContent as CityName;
      const currentCity = cities.find((city) => city.name === currentCityName) as City;

      if(currentCityName !== selectedCityName) {
        dispatch(changeCity(currentCity));
      }
    },
    [cities, dispatch, selectedCityName],
  );

  return(
    <ul className="locations__list tabs__list">
      {
        cities.map((city)=> (
          <li
            key={city.name}
            className="locations__item"
            onClick={handleCityClick}
          >
            <Link to={AppRoute.Main}
              className={`locations__item-link tabs__item ${(city.name === selectedCityName)
                ? 'tabs__item--active'
                : ''}`}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))
      }

    </ul>
  );
}


export default memo(CitiesList);
