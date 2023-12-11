import useWeather from '@/context/useWeather';
import { Loader2 } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

function LocationFetcher() {
  const [loading, setLoading] = useState<boolean>(true);

  const [failed, setFailed] = useState<boolean>(false);

  const { setPosition } = useWeather();

  const getGeoPosition = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
        setLoading(false);
      },
      () => {
        setFailed(true);
      },
    );
  }, [setPosition]);

  useEffect(() => {
    getGeoPosition();
  }, [getGeoPosition]);

  // const refetchGeoLocation = () => {
  //   setFailed(false);
  //   getGeoPosition();
  // };

  if (!loading) return null;
  if (failed) {
    return;
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-black/60 text-white p-3 pl-5 rounded-sm inline-flex items-center gap-3">
        <>
          <Loader2 className="animate-spin w-4 h-4" />
          Click Allow to fetch your location
        </>
      </div>
    </div>
  );
}

export default LocationFetcher;
