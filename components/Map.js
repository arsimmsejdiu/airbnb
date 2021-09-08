import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

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
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {/* The popup that should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="w-80 h-[30rem] cursor-pointer z-50">
                <div className="info-card-img">
                  <Image
                    src={result.img}
                    alt={result.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-col flex-grow pl-5 py-5">
                  <div className="flex justify-between">
                    <p>{result.location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                  </div>
                  <h4 className="text-xl">{result.title}</h4>
                  <div className="border-b w-10 pt-2" />
                  <p className="text-sm pt-2 text-gray-500 flex-grow">
                    {result.description}
                  </p>

                  <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                      <StarIcon className="h-5 text-red-400" />
                      {result.star}
                    </p>
                    <div>
                      <p className="text-lg lg:text-2xl font-semibold pb-2">
                        {result.price}
                      </p>
                      <p className="text-right font-extralight">
                        {result.total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGl>
  );
}

export default Map;
