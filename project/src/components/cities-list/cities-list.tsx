import { Link } from 'react-router-dom';
import type { City } from '../../@types/offer-types';
import { AppRoute } from '../../const/app-route';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/actions';

type CitiesListProps ={
  cities: City[];
  selectedCity: City;
}

function CitiesList({cities, selectedCity}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return(
    <ul className="locations__list tabs__list">
      {
        cities.map((city)=> (
          <li
            key={city.name}
            className="locations__item"
            onClick={()=> dispatch(changeCity(city))}
          >
            <Link to={`${AppRoute.Main}`}
              className={`locations__item-link tabs__item ${(city.name === selectedCity.name) ? 'tabs__item--active' : ''}`}//не получилось написать при помощи &&
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))
      }

    </ul>
  );
}


export default CitiesList;
