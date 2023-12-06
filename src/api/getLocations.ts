import { API_SEARCH, SearchResult, api_query } from './types';

export async function getLocations(query: string) {
  const res = await fetch(api_query(API_SEARCH, ':q:', query));
  return await (res.json() as Promise<SearchResult>);
}
