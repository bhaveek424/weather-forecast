import Logo from '@/assets/icons/Logo';
import RefreshIcon from '@/assets/icons/RefreshIcon';
import useWeather from '@/context/useWeather';

export default function Header() {
  const { setPosition } = useWeather();
  return (
    <header className="w-full bg-[#60656B] sticky md:h-[47px] py-2 md:px-[100px] sm:px-3">
      <nav className="flex justify-between px-2">
        <div className="flex gap-2 items-center">
          <Logo />
          <span className="text-white text-2xl font-bold">Weather 99</span>
        </div>

        <button
          type="button"
          onClick={() => setPosition((pos) => (pos ? { ...pos } : null))}
          className="inline-flex absolute flex-col md:flex-row right-0 bottom-0 top-0 md:relative md:mr-[100px] gap-0 md:gap-1 items-center transition-all border-l md:border-l-0 border-l-white/20 px-2 ">
          <RefreshIcon />
          <span className="text-white text-sm md:text-base">Refresh</span>
        </button>
      </nav>
    </header>
  );
}
