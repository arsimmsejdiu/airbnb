import { useState } from "react";
import ReactMapGl from "react-map-gl";

function Map() {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 11,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/arsimsejdiu/ckta74q8o6mhs17qoa7txekwj"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    ></ReactMapGl>
  );
}

export default Map;
