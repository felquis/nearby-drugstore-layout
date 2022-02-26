import { useEffect, useState } from "react";
import haversine from "haversine";
import { BiCurrentLocation } from "@react-icons/all-files/bi/BiCurrentLocation";
import { MdLocationDisabled } from "@react-icons/all-files/md/MdLocationDisabled";

import { locations } from "../pages";
import LocationItem from "./LocationItem";

export default function UserLocation() {
  const [location, setLocation] = useState<GeolocationCoordinates>();
  const [locationList, setNewLocations] = useState(locations);

  useEffect(() => {
    if (!location?.latitude || !location?.longitude) return;

    const start = {
      latitude: location?.latitude,
      longitude: location?.longitude,
    };

    const newLocations = locations
      .map((place) => {
        return {
          ...place,
          distance:
            haversine(start, {
              latitude: place.lat,
              longitude: place.lng,
            }) + 0.5,
        };
      })
      .sort((a, b) => {
        return a.distance > b.distance ? 1 : -1;
      });

    setNewLocations(newLocations);
  }, [location]);

  return (
    <>
      <div className="mb-2">
        <button
          className={`font-semibold rounded-md p-4  inline-flex items-center gap-2 ${
            location
              ? "focus:bg-green-300 bg-green-100 hover:bg-green-200 text-green-700"
              : "focus:bg-yellow-300 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 "
          }`}
          onClick={() => {
            window.navigator.geolocation.watchPosition(
              (success) => {
                console.log(success);
                setLocation(success.coords);
              },
              (error) => {
                console.log(error);
              },
              {
                enableHighAccuracy: true,
                maximumAge: 300,
              }
            );
          }}
        >
          {location
            ? `Location ${location.accuracy}m precise`
            : "Find Closest To Me"}

          {location ? (
            <BiCurrentLocation className="text-xl" />
          ) : (
            <MdLocationDisabled className="text-xl" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {locationList.map((a, i) => (
          <LocationItem key={i} {...a} />
        ))}
      </div>
    </>
  );
}
