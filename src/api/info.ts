import { API_INFO, SearchResult, api_query } from './types';
import { GeoPosition } from '../context/context';

async function fetchInformation(pos: GeoPosition) {
  if (!pos) return Promise.resolve(null);
  let param = API_INFO;
  param = api_query(param, ':lat:', pos.lat.toString());
  param = api_query(param, ':lon:', pos.lon.toString());
  const res = await fetch(param);
  return await (res.json() as Promise<SearchResult>);
}

export default fetchInformation;
