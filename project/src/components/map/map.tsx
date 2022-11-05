import {useRef, useEffect} from 'react';
import {Icon, Marker, LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MarkerUrl } from '../../enum/marker-url';
import { MarkerShape } from '../../enum/marker-shape';
import useMap from '../../hooks/use-map';

import type {City, Offer} from '../../@types/offer-types';

type MapProps = {
  city: City;
  offers: Offer[];
  currentOffer: Offer | undefined;
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
  const {city, offers, currentOffer} = props;
  const { latitude: lat, longitude: lng, zoom } = city.location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    let isMapMounted = true;

    if(isMapMounted && map) {
      map.setView({ lat, lng }, zoom, { animate: true });

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        const markerGroup = new LayerGroup();

        marker.setIcon(
          (currentOffer !== undefined) && (offer.id === currentOffer.id)
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(markerGroup);

        markerGroup.addTo(map);
      });
    }

    return () => {
      isMapMounted = false;
    };
  }, [map, offers, currentOffer]);

  return (
    <section
      className="cities__map"//TODO как передавать нужные классы? нужен ли класс map?
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>);
}

export default Map;
