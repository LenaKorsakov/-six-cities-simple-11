import { Link} from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import { useAppDispatch} from '../../hooks';
import { City } from '../../@types/offer-types';
import { getRandomItem } from '../../utiles/get-random-item';
import { changeCity } from '../../store/offers-process/offers-process';

type RandomCityProps = {
  locations: City[];
}

function RandomCity({locations}: RandomCityProps): JSX.Element{
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
