import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToDMS(latitude: number, longitude: number): string {
  const latDir = latitude >= 0 ? 'N' : 'S';
  const lonDir = longitude >= 0 ? 'E' : 'W';

  const latAbs = Math.abs(latitude);
  const lonAbs = Math.abs(longitude);

  const latDeg = Math.floor(latAbs);
  const latMin = Math.floor((latAbs - latDeg) * 60);
  const latSec = ((latAbs - latDeg - latMin / 60) * 3600).toFixed(2);

  const lonDeg = Math.floor(lonAbs);
  const lonMin = Math.floor((lonAbs - lonDeg) * 60);
  const lonSec = ((lonAbs - lonDeg - lonMin / 60) * 3600).toFixed(2);

  const formattedLat = `${latDeg}°${latMin}'${latSec}'' ${latDir}`;
  const formattedLon = `${lonDeg}°${lonMin}'${lonSec}'' ${lonDir}`;

  return formattedLat + ' & ' + formattedLon;
}

export function formatDate(inputDate: string) {
  return format(new Date(inputDate), 'd MMM yyyy');
}

export function formatTemperature(celsius: number): string {
  const celsiusString = `${celsius.toFixed(0)}°C`;
  const fahrenheitString = `${((celsius * 9) / 5 + 32).toFixed(0)}°F`;
  return `${celsiusString} / ${fahrenheitString}`;
}

export function formatTime(inputDate: number) {
  const date = new Date(inputDate * 1000);

  return format(date, 'hh:mm a');
}
