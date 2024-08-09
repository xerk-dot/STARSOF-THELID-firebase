import {useMemo} from 'react';
import { Marker} from 'react-map-gl';
import logoPic from '../../images/logo-full.png';
import CITIES from '../../training-data/cities.json';
import {useDispatch } from 'react-redux';
import {setPopup} from '../../redux/slice/popupSlice';

export function Pins(){
  const dispatch = useDispatch();

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"

          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            dispatch(setPopup(Number(city.longitude) || 0));
          }}
        >
          <img className="map-icons" src={logoPic}/>
        </Marker>
      )),
    []
  );
  return pins;
}
