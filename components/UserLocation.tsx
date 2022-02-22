import { useEffect, useState } from "react";
import haversine from "haversine";

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
      <div>
        <button
          onClick={() => {
            window.navigator.geolocation.getCurrentPosition(
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
          Find Closest To Me
        </button>
      </div>

      {locationList.map((a, i) => (
        <LocationItem key={i} {...a} />
      ))}
    </>
  );
}
