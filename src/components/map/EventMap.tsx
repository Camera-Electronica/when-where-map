import { useState } from "react";
import { Map, MapCameraChangedEvent, MapMouseEvent, Marker } from '@vis.gl/react-google-maps';
import { v4 as uuidv4 } from 'uuid';

type Poi = { key: string, location: google.maps.LatLngLiteral }

const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <Marker
          key={poi.key}
          position={poi.location}
        />
      ))}
    </>
  );
};

const EventMap = () => {

  const locationSofiaCenter = { lat: 42.685165, lng: 23.319169 };

  const [locations, setLocations] = useState([] as Poi[]);

  function viewChanged(ev: MapCameraChangedEvent): void {
    console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom);
  }

  function mapClicked(ev: MapMouseEvent): void {
    console.log(ev.detail.latLng);
    // Get the latitude and longitude from the click event
    const point: Poi = {
      key: uuidv4(),
      location: {
        lat: ev.detail.latLng?.lat || 0,
        lng: ev.detail.latLng?.lng || 0,
      }
    };
    setLocations([...locations, point]);
  }

  return (
    <Map
      defaultZoom={14}
      defaultCenter={locationSofiaCenter}
      onCameraChanged={viewChanged}
      onClick={mapClicked}
    >
      <PoiMarkers pois={locations} />
    </Map>
  );

}

export default EventMap;

