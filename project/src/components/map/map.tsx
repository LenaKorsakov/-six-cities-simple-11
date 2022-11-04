import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { UrlMarker } from '../../enum/url-marker';
import useMap from '../../hooks/use-map';

import type {City, Offer} from '../../@types/offer-types';

type MapProps = {
  city: City;
  offers: Offer[];
  currentOffer: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, currentOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        });

        marker.setIcon(
          (currentOffer !== undefined) && (offer.id !== currentOffer.id)
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);
      });
    }
  }, [map, offers, currentOffer]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
