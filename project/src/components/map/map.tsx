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
          (currentOffer !== undefined) && (offer.id === currentOffer.id)
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(markerGroup);

        markerGroup.addTo(map);
      });
    }

    return () => {
      map?.removeLayer(markerGroup);
    };
  }, [map, offers, currentOffer, city]);

  return (
    <section
      className="cities__map"//TODO как передавать нужные классы? нужен ли класс map?
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>);
}

export default Map;
