import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

type LocationCoords = {
  latitude: number;
  longitude: number;
} | null;

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<LocationCoords>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });

      setLocation({ latitude, longitude });
      setLoading(false);
    })();
  }, []);

  return { location, errorMsg, loading };
};
