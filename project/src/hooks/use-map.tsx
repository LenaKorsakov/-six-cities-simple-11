import {useRef, useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import type {City} from '../../src/@types/offer-types';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef<boolean>(false);

  useEffect(() => {
    if(mapRef.current === null || isRenderRef.current) {
      return;
    }
    const {latitude: lat, longitude: lng, zoom} = city.location;

    if (map !== null) {
      map.setView({lat, lng}, zoom, {animate: true});
      return;
    }

    const tile = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    });

    const instance = new Map(mapRef.current, {
      zoom,
      center: {lat,lng},
      layers: [tile],
    });

    setMap(instance);
    isRenderRef.current = true;

  },[mapRef, city, map]);

  return map;
}

export default useMap;
