export const API_KEY = 'c6a97998e30e486f8f89bf48d9f02a58';

export const API_SEARCH = `https://api.openweathermap.org/geo/1.0/direct?limit=10&APPID=${API_KEY}&q=:q:`;
export const API_INFO = `https://api.openweathermap.org/geo/1.0/reverse?APPID=${API_KEY}&lat=:lat:&lon=:lon:`;
export const API_DATA = `https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=${API_KEY}&lat=:lat:&lon=:lon:8`;

export function api_query(
  str: string,
  key: ':lat:' | ':lon:' | ':q:',
  value: string,
) {
  return str.replace(key, encodeURIComponent(value));
}

export type SearchResult = WeatherLocations[];

export type WeatherLocations = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string | null;
};

export type WeatherForecast = {
  list: ForecastData[];
  city: ForecastCity;
};

export type ForecastData = {
  dt: number;
  main: ForecastMain;
  weather: ForecastEntity[];
  dt_txt: string;
};

export type ForecastMain = {
  temp_min: number;
  temp_max: number;
  humidity: number;
};

export type ForecastEntity = {
  main: string;
  icon: string;
};

export type ForecastCity = {
  sunrise: number;
  sunset: number;
};
