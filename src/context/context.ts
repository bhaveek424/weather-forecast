import { createContext } from 'react';

export type GeoPosition = {
  lat: number;
  lon: number;
} | null;

export type GeoInformation = {
  name: string;
  state?: string | null;
  country: string;
  lat: number;
  lon: number;
} | null;

export type GeoForecast = {
  sunrise: string;
  sunset: string;
  date: string;
  main: string;
  temp_high: string;
  temp_low: string;
  key: string;
  icon: string;
  humidity: string;
};

export type GeoCollection = GeoForecast[] | null;

export type AppContextValue = {
  position: GeoPosition;
  setPosition: React.Dispatch<React.SetStateAction<GeoPosition>>;
  information: GeoInformation;
  setInformation: React.Dispatch<React.SetStateAction<GeoInformation>>;
  forecast: GeoCollection | null;
  setForecast: React.Dispatch<React.SetStateAction<GeoCollection>>;
};

const AppContext = createContext<AppContextValue>({
  position: null,
  setPosition: () => {},
  information: null,
  setInformation: () => {},
  forecast: null,
  setForecast: () => {},
});

export default AppContext;
