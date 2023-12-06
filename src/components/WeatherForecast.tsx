import useWeather from '@/context/useProvider';
import WeatherCard from './WeatherCard';
import { CalendarDays } from 'lucide-react';

function WeatherForecast() {
  const { forecast } = useWeather();
  return (
    <div className="w-full overflow-auto p-5 [&::-webkit-scroll]:hidden">
      <div className="flex flex-nowrap min-w-full gap-2 md:gap-5">
        <WeatherCard
          header={
            <div className="w-full text-left ">
              <span className="inline-block">Select Date</span>
              <span className="inline-flex px-5 py-3 mt-1 gap-2 rounded border sm:text-sm border-black/30 bg-gray-200">
                <CalendarDays />
                {forecast && forecast[0].date}
              </span>
            </div>
          }
          temp_high="High Temperature"
          temp_low="Low Temperature"
          humidity="Humidity"
          sunrise="Sunrise Time"
          sunset="Sunset Time"
        />
        {forecast?.slice(0, 5).map((item) => (
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
      </div>
    </div>
  );
}

export default WeatherForecast;
