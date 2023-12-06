import { API_DATA, WeatherForecast, api_query } from './types';
import { GeoPosition } from '../context/context';

async function fetchForecast(pos: GeoPosition) {
  if (!pos) return Promise.resolve(null);
  let param = API_DATA;
  param = api_query(param, ':lat:', pos.lat.toString());
  param = api_query(param, ':lon:', pos.lon.toString());
  const res = await fetch(param);
  return await (res.json() as Promise<WeatherForecast>);
}

export default fetchForecast;
