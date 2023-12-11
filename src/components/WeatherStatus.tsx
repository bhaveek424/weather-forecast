import LocationIcon from '@/assets/icons/LocationIcon';
import Searchbar from './Searchbar';
import useWeather from '@/context/useWeather';
import { convertToDMS } from '@/lib/utils';

function WeatherStatus() {
  const { information } = useWeather();
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap my-5 md:my-10 flex-row-reverse sm:justify-center md:justify-between items-center gap-3 border-b border-b-gray-400 pb-2">
      {/* Searchbar */}
      <Searchbar />
      {/* Location info */}
      <div className="mr-auto">
        <div className="flex gap-2 items-center ">
          <LocationIcon />
          <h1 className="text-2xl font-bold">
            {information
              ? `${information.name} ${
                  information.state ? ', ' + information.state : ''
                }, ${information.country}`
              : 'Please enter a location.'}
          </h1>
        </div>
        <div className="text-gray-600">
          {information ? convertToDMS(information.lat, information.lon) : ''}
        </div>
      </div>
    </div>
  );
}

export default WeatherStatus;
