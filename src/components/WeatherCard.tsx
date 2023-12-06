// import { Card, CardHeader, CardTitle } from './ui/card';

export type WeatherCardProps = {
  prefix?: React.ReactNode;
  header?: React.ReactNode;
  layout?: boolean;
  temp_high: React.ReactNode;
  temp_low: React.ReactNode;
  humidity: React.ReactNode;
  sunrise: React.ReactNode;
  sunset: React.ReactNode;
};

function WeatherCard({
  prefix,
  header,
  layout,
  temp_high,
  temp_low,
  humidity,
  sunrise,
  sunset,
}: WeatherCardProps) {
  return (
    <div className="flex flex-col justify-end flex-1 flex-shrink-0 basis-1/6">
      <div className="text-center mb-3 text-lg font-semibold text-gray-600">
        {prefix}
      </div>
      <div
        className={
          'flex flex-col justify-end ' +
          (layout ? 'card text-white rounded-xl text-center font-bold' : '')
        }>
        <header className="px-2 py-3 border-b border-b-white/20 text-center">
          {header}
        </header>
        <div className="space-y-5 py-5 px-2 ">
          <div>{temp_high}</div>
          <div>{temp_low}</div>
          <div>{humidity}</div>
          <div>{sunrise}</div>
          <div>{sunset}</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
