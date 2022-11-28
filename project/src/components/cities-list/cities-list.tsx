import { memo, useCallback, MouseEvent} from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../../@types/offer-types';
import { AppRoute } from '../../const/app-route';
import { CityName } from '../../const/city-name';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offers-process/offers-process';

type CitiesListProps ={
  cities: City[];
  selectedCity: City;
}

function CitiesList({cities, selectedCity}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = useCallback(
    (event: MouseEvent<HTMLLIElement>) => {
      event.preventDefault();

      const currentCityName = event.currentTarget.textContent as CityName;
      const currentCity = cities.find((city) => city.name === currentCityName) as City;

      if(currentCityName !== selectedCity.name) {
        dispatch(changeCity(currentCity));
      }
    },
    [cities, dispatch, selectedCity],
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
              className={`locations__item-link tabs__item ${(city.name === selectedCity.name)
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
