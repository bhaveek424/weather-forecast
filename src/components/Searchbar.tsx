import { Loader2, Search } from 'lucide-react';
import useSearch from '@/hooks/use-search';
import type { SearchResult, WeatherLocations } from '@/api/types';
import useWeather from '@/context/useWeather';

function Searchbar() {
  const [searchTerm, setSearchTerm, results, isLoading] = useSearch();
  const { setPosition, setInformation } = useWeather();

  return (
    <div className="flex bg-white rounded h-11 w-full md:max-w-sm relative items-center ">
      <input
        type="search"
        className="bg-transparent outline-none flex-1 rounded-sm placeholder:italic px-3 "
        value={searchTerm}
        id="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search your city here..."
      />
      <Search className="w-7 h-7 text-[#444444] mx-3" />
      {searchTerm && (
        <div className="absolute top-full mt-3 bg-white shadow-lg left-0 right-0 rounded-md z-20 overflow-hidden [&>span]:w-full [&>span]:inline-block [&>span]:my-5 [&>span]:text-center">
          {isLoading ? (
            <span className="mx-auto">
              <Loader2 className="animate-spin w-4 h-4 mx-auto" />
            </span>
          ) : results === null ? (
            <span className="my-5 text-red-600">Unknown error occurred</span>
          ) : !searchTerm ? (
            <span>Search for a city...</span>
          ) : results.length !== 0 ? (
            <SearchResult
              result={results}
              select={(city) => {
                setSearchTerm('');
                setInformation({
                  name: city.name,
                  state: city.state,
                  country: city.country,
                  lat: city.lat,
                  lon: city.lon,
                });
                setPosition({
                  lat: city.lat,
                  lon: city.lon,
                });
              }}
            />
          ) : (
            <span>No results found</span>
          )}
        </div>
      )}
    </div>
  );
}

export default Searchbar;

export type SearchResultHook = {
  result: SearchResult;
  select: (local: WeatherLocations) => void;
};
function SearchResult({ result, select }: SearchResultHook) {
  return (
    <>
      {result.map((city) => (
        <button
          key={city.lat + city.lon}
          onClick={() => select(city)}
          className="border-b border-b-gray-300 last-of-type:border-b-0 px-5 py-3 block w-full hover:bg-blue-100 transition-all text-left">
          {city.name} {city.state ? ', ' + city.state : ''}, {city.country}
        </button>
      ))}
    </>
  );
}
