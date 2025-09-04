import CoinOverview from '@/components/coins/coin-overview';
import { getTrendingCoins } from 'lib/coins';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';
export default async function OtherCoins() {
  const { coins: trendingCoins } = await getTrendingCoins();

  return (
    <section>
      <div className="flex justify-between px-32 pt-12 pb-6">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-semibold">
            ارز هایی که دیگران دنبال میکنند
          </h2>
          <p className="px-2 py-0.5 rounded-sm bg-green-200 text-green-700 text-sm">
            Live
          </p>
        </div>
        <Link
          href="#"
          className="flex items-center gap-2 text-blue-500 font-semibold"
        >
          <span>محبوب ترین ارز ها را ببینید</span>
          <FaChevronLeft />
        </Link>
      </div>
      <div className="rounded-lg h-12 mx-32 overflow-x-hidden mask-x-from-90% group flex">
        <ul className="flex animate-slide group-hover:[animation-play-state:paused]">
          {trendingCoins.map((coin) => {
            const { thumb: image, name, symbol } = coin.item;
            return (
              <li key={name} className="flex">
                <CoinOverview image={image} name={name} symbol={symbol} />
                <div
                  aria-orientation="vertical"
                  className="w-0.5 h-2/3 bg-slate-700/80 my-auto"
                />
              </li>
            );
          })}
        </ul>
        <ul className="flex animate-slide group-hover:[animation-play-state:paused]">
          {trendingCoins.map((coin) => {
            const { thumb: image, name, symbol } = coin.item;
            return (
              <li key={name} className="flex">
                <CoinOverview image={image} name={name} symbol={symbol} />
                <div
                  aria-orientation="vertical"
                  className="w-0.5 h-2/3 bg-slate-700/80 my-auto"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
