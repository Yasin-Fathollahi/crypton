import Link from 'next/link';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import MainNav from '@/components/nav/main-nav';
import CryptonText from '@/components/crypton/crypton-text';

export default function HeroSection() {
  return (
    <header className="h-screen text-white relative bg-cover bg-[url(/cubes-unsplash.jpg)] z-10">
      <div className="h-screen w-full absolute top-0 left-0 backdrop-blur-xs -z-20"></div>
      <MainNav isHome />
      <div className="flex flex-col justify-center items-center h-full gap-8 pt-4">
        <h1 className="text-6xl tracking-widest font-bold flex">
          <CryptonText hero />
          <span>، لذت یک خرید امن و بی دردسر</span>
        </h1>
        <Link
          href="#"
          className="px-8 py-3 bg-white text-black rounded-full border-6 border-solid border-gray-700/90 font-semibold"
        >
          همین الان شروع کن
        </Link>
      </div>
      <Link
        aria-label="More Information"
        href="#"
        className="absolute bottom-4 left-1/2 -translate-1/2 p-3 rounded-full border-2 border-solid border-gray-700/80  transition-colors duration-500 hover:border-white hover:animate-none animate-pulse"
      >
        <ArrowDownIcon className="size-6 text-white" />
      </Link>
    </header>
  );
}
