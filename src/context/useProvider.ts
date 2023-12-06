import { useContext } from 'react';
import AppContext, { AppContextValue } from './context';

export default function useWeather(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error('Unable to access App Context API.');
  return context;
}
