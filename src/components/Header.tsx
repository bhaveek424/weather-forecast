import Logo from '@/assets/icons/Logo';
import RefreshIcon from '@/assets/icons/RefreshIcon';

export default function Header() {
  return (
    <header className="w-full bg-[#60656B] sticky md:h-[47px] py-2 md:px-[100px] sm:px-3">
      <nav className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Logo />
          <span className="text-white text-2xl font-bold">Weather 99</span>
        </div>

        <div className="flex items-center gap-1 md:mr-[100px]">
          <RefreshIcon />
          <span className="text-white text-sm sm:hidden md:block">Refresh</span>
        </div>
      </nav>
    </header>
  );
}
