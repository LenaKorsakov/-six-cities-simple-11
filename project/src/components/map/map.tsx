import {useRef, useEffect, memo} from 'react';
import cn from 'classnames';
import {Icon, Marker, LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/use-map';

import { MarkerUrl } from '../../const/marker-url';
import { MarkerShape } from '../../const/marker-shape';

import type {City, Offer} from '../../@types/offer-types';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | null;
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
  const {city, offers, selectedOffer, isCityMap} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map === null) {
      return;
    }

    const markers = offers.map((offer) => {
      const { latitude: lat, longitude: lng } = offer.location;

      return new Marker({ lat, lng }, {
        icon: offer.id === selectedOffer?.id ? currentCustomIcon : defaultCustomIcon,
      });
    });

    const {latitude: lat, longitude: lng} = city.location;
    map.setView({lat, lng});

    const markerGroup = new LayerGroup(markers);

    markerGroup.addTo(map);

    return () => {
      map.removeLayer(markerGroup);
    };
  }, [map, offers, selectedOffer, city]);

  return (
    <section
      className={cn('map',{
        'cities__map': isCityMap,
        'property__map': !isCityMap
      })}

      style={{ height: `${isCityMap ? '100%' : '700px'}` }}
      ref={mapRef}
    >
    </section>);
}

export default memo(Map);
