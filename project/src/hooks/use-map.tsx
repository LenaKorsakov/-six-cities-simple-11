import {useRef, useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import type {City} from '../../src/@types/offer-types';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef<boolean>(false);

  const{latitude, longitude, zoom} = city.location;

  useEffect(() => {
    if(mapRef.current !== null && !isRenderRef.current) {

      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: zoom
      });


      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderRef.current = true;
    }
  },[mapRef, city]);

  return map;
}

export default useMap;
