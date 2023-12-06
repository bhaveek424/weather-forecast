import LocationIcon from '@/assets/icons/LocationIcon';
import Searchbar from './Searchbar';

function InfoPanel() {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap my-5 md:my-10 flex-row-reverse justify-between items-center gap-3 border-b border-b-gray-400 pb-2">
      {/* Searchbar */}
      <Searchbar />
      {/* Location info */}
      <div>
        <div className="inline-flex gap-2 items-center ">
          <LocationIcon />
          <h1 className="text-2xl font-bold"> Agra, Uttar Pradesh </h1>
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;
