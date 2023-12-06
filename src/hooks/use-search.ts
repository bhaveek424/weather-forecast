import React, { useEffect, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import { SearchResult } from '@/api/types';
import { getLocations } from '@/api/getLocations';
export type SearchHook = [
  searchTerm: string,
  setTermQuery: React.Dispatch<React.SetStateAction<string>>,
  results: SearchResult | null,
  isLoading: boolean,
];

function useSearch(): SearchHook {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult | null>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      getLocations(debouncedSearchTerm)
        .then((results) => {
          setResults(results);
          setIsLoading(false);
        })
        .catch(() => {
          setResults([]);
          setIsLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return [searchTerm, setSearchTerm, results, isLoading];
}

export default useSearch;
