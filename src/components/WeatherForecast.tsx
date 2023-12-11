import useWeather from '@/context/useWeather';
import WeatherCard from './WeatherCard';

import Scrollable from './Scrollable';
import { CalendarDays } from 'lucide-react';

function WeatherForecast() {
  const { forecast } = useWeather();
  return (
    <div className="flex items-center w-full ">
      <div className="flex flex-col">
        <div className="text-center mb-3 text-base font-semibold text-gray-600"></div>
        <div className={'flex flex-col justify-end '}>
          <header className="px-2 py-3 border-b border-b-white/20 text-center">
            <div className="w-full text-left">
              <span className="inline-block">Select Date</span>
              <span className="inline-flex px-2 py-3 mt-1 gap-2 rounded border text-sm border-black/30 bg-gray-200">
                <CalendarDays />
                {forecast && forecast[0].date}
              </span>
            </div>
          </header>
          <div className="space-y-5 py-5 px-2 text-base">
            <div className="sm:text-sm md:text-base">High Temperature</div>
            <div>Low Temperature</div>
            <div>Humidity</div>
            <div>Sunrise Time</div>
            <div>Sunset Time</div>
          </div>
        </div>
      </div>
      <Scrollable>
        {forecast &&
          forecast.slice(0, 5).map((item) => (
            <WeatherCard
              prefix={item.date}
              key={item.key}
              layout
              header={
                <div className="inline-flex items-center gap-3 py-2">
                  <span className="p-1 w-10 h-10 bg-[#60656B] rounded-full">
                    <img
                      className="scale-125"
                      key={item.icon}
                      src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                      width={60}
                      height={60}
                      alt={item.key}
                    />
                  </span>
                  <span className="text-2xl font-bold">{item.main}</span>
                </div>
              }
              temp_high={item.temp_high}
              temp_low={item.temp_low}
              humidity={item.humidity}
              sunrise={item.sunrise}
              sunset={item.sunset}
            />
          ))}
      </Scrollable>
    </div>
  );
}

export default WeatherForecast;
