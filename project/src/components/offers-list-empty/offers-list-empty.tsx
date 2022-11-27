import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/offers-process/offers-process-selectors';

function OffersListEmpty(): JSX.Element {
  const city = useAppSelector(getCity);

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {city.name}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );
}

export default OffersListEmpty;
