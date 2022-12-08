import { Link} from 'react-router-dom';

import { changeCity } from '../../store/offers-process/offers-process';
import { useAppDispatch} from '../../hooks';

import { getRandomItem } from '../../utiles/get-random-item';
import { AppRoute } from '../../const/app-route';

import { City } from '../../@types/offer-types';

type RandomCityProps = {
  cities: City[];
}

function RandomCity({cities: locations}: RandomCityProps): JSX.Element{
  const dispatch = useAppDispatch();
  const randomCity = getRandomItem<City>(locations);

  function handleCityNameClick() {
    dispatch(changeCity(randomCity));
  }

  return (
    <section className="locations locations--login locations--current">
      <div
        className="locations__item"
        onClick={handleCityNameClick}
      >
        <Link
          className="locations__item-link"
          to={AppRoute.Main}
        >
          <span>{ randomCity.name }</span>
        </Link>
      </div>
    </section>

  );
}

export default RandomCity;
