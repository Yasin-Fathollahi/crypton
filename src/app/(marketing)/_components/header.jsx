import Link from 'next/link';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import CryptonLogo from '@/components/crypton-logo';

export default function Header() {
  return (
    <header className="h-screen text-white relative bg-cover bg-[url(/cubes-unsplash.jpg)] z-10">
      <div className="h-screen w-full absolute top-0 left-0 backdrop-blur-xs -z-20"></div>
      <nav className="bg-linear-to-r from-gray-900 via-30% via-gray-700 to-gray-900 border-solid border-2 border-gray-700/50 rounded-full flex justify-between items-center w-1/2 mx-auto p-2 fixed top-4 left-1/2 -translate-x-1/2">
        {/* <div className="h-10 w-10 bg-blue-500 rounded-full flex justify-center items-center">
          <Link className="font-semibold" href="#">
            <CryptonLogo />C
          </Link>
        </div> */}
        <div>
          <Link href="/">
            <CryptonLogo nav />
          </Link>
        </div>
        <div className="flex items-center ">
          <ul className="flex gap-4 ">
            <li>
              <Link className="hover:text-blue-500 p-2" href="#">
                قیمت رمز ارز ها
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 p-2" href="#">
                ابزار ها
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 p-2" href="#">
                درباره ما
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 p-2" href="#">
                همکاری
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="#"
          className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold"
        >
          ثبت نام / ورود
        </Link>
      </nav>
      <div className="flex flex-col justify-center items-center h-full gap-8 pt-4">
        <h1 className="text-6xl tracking-widest font-bold">
          کریپتون، لذت یک خرید امن و بی دردسر
        </h1>
        <Link
          href="#"
          className="px-8 py-3 bg-white text-black rounded-full border-6 border-solid border-gray-700/90 font-semibold"
        >
          همین الان شروع کن
        </Link>
      </div>
      <Link
        href="#"
        className="absolute bottom-4 left-1/2 -translate-1/2 p-3 rounded-full border-2 border-solid border-gray-700/80  transition-colors duration-500 hover:border-white hover:animate-none animate-pulse"
      >
        <ArrowDownIcon className="size-6 text-white" />
      </Link>
    </header>
  );
}
