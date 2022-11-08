import {useRef, useEffect} from 'react';

import cn from 'classnames';

import {Icon, Marker, LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MarkerUrl } from '../../enum/marker-url';
import { MarkerShape } from '../../enum/marker-shape';

import useMap from '../../hooks/use-map';
import type {City, Offer} from '../../@types/offer-types';

type MapProps = {
  city: City;
  offers: Offer[];
  currentOffer: Offer | null;
  isCityMap: boolean;
}

const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.Default,
  iconSize: MarkerShape.Size,
  iconAnchor: MarkerShape.Anchor
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.Current,
  iconSize: MarkerShape.Size,
  iconAnchor: MarkerShape.Anchor
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, currentOffer, isCityMap} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markerGroup = new LayerGroup();

    if(map) {
      const { latitude: lat, longitude: lng, zoom } = city.location;

      map.setView({ lat, lng }, zoom, { animate: true });

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          (currentOffer !== null) && (offer.id === currentOffer.id)
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(markerGroup);
      });

      markerGroup.addTo(map);
    }

    return () => {
      map?.removeLayer(markerGroup);
    };
  }, [map, offers, currentOffer, city]);

  return (
    <section
      className={cn('map',{
        'cities__map': isCityMap,
        'property__map': !isCityMap
      })}

      style={{height: '700px'}}//не совсем годится, потому что на main лучше отрабатывает при 100%, но это не подходит для страницы отзыва
      ref={mapRef}
    >
    </section>);
}

export default Map;
