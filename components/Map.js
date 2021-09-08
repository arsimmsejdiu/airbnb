import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
  // Transform the search results object into the {long and lat} objects
  const coordinates = searchResults.map((result) => ({
      longitude: result.long,
      latitude: result.lat,
  }));
  
  //The latitude and longitude of the center of the location coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/arsimsejdiu/ckta74q8o6mhs17qoa7txekwj"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    >
        {searchResults.map((result) => (
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p className="cursor-pointer text-xl animate-bounce">🏨</p>
                </Marker>
            </div>
        ))}
    </ReactMapGl>
  );
}

export default Map;
