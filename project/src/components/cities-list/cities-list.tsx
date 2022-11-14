import type { City } from '../../@types/offer-types';

type CitiesListProps ={
  cities: City[];
  selectCity: City;
}

function CitiesList({cities, selectCity}: CitiesListProps): JSX.Element {
  return(
    <ul className="locations__list tabs__list">
      {
        cities.map((city)=> (
          <li key={city.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${(city.name === selectCity.name) ? 'tabs__item--active' : ''}`}//не получилось написать при помощи &&
              href="TODO"
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))
      }

    </ul>
  );
}


export default CitiesList;
