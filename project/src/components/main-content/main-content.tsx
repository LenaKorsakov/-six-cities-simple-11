import { memo} from 'react';

import OffersListCity from '../offers-list-city/offers-list-city';
import CitiesList from '../cities-list/cities-list';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

import { useAppSelector } from '../../hooks';
import { getCity} from '../../store/offers-process/offers-process-selectors';
import { getOffersLoadingStatus } from '../../store/offers-city-data/offers-city-data-selectors';

import type {City} from '../../@types/offer-types';

type MainContentProps = {
  cities: City[];
};

function MainContent({cities}: MainContentProps): JSX.Element {
  const selectedCity = useAppSelector(getCity);
  const isOffersDataLoading = useAppSelector(getOffersLoadingStatus);

  const selectedCityName = selectedCity.name;

  return(
    isOffersDataLoading ? <LoadingScreen/> :
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={cities}
              selectedCityName={selectedCityName}
            />
          </section>
        </div>
        <OffersListCity
          selectedCity={selectedCity}
        />
      </main>
  );
}

export default memo(MainContent);
export type { MainContentProps as MainScreenProps };
