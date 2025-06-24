import { useState } from 'react';
import * as Location from 'expo-location';

type LocationCoords = {
  latitude: number;
  longitude: number;
} | null;

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<LocationCoords>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const detectLocation = async () => {
    setLoading(true);
    setErrorMsg(null);
    setLocation(null);

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation({ latitude, longitude });
    } catch (error) {
      setErrorMsg('Error detecting location');
    } finally {
      setLoading(false);
    }
  };

  return { location, errorMsg, loading, detectLocation };
};

