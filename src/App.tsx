import Header from './components/Header';
import LocationFetcher from './components/LocationFetcher';
import WeatherForecast from './components/WeatherForecast';
import WeatherStatus from './components/WeatherStatus';
import ContextProvider from './context';

function App() {
  return (
    <ContextProvider>
      <Header />
      <div className="w-full">
        <main className="w-full max-w-7xl mx-auto p-5 md:px-[100px] ">
          <WeatherStatus />
          <WeatherForecast />
        </main>
      </div>
      <LocationFetcher />
    </ContextProvider>
  );
}

export default App;
