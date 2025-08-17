import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  formatChangePercentage,
  formatPrice,
} from '../../../../utils/formatters';
// import { getCoinDetails } from 'lib/coins';
// import Chart from '../../chart/chart';
const Chart = dynamic(() => import('../../chart/chart'), {
  loading: () => <p className="text-white text-center">درحال دریافت چارت...</p>,
  // ssr: false,
});

export default async function CoinRow({
  coin: { image, symbol, price, daily_change_price: priceChange, details },
}) {
  const { changePercentage, changeColor } = formatChangePercentage(priceChange);
  const formattedPrice = formatPrice(price);
  const formattedSymbol = symbol.replace('_', '/');

  // const coinDetails = await getCoinDetails(id, 1);
  const prices = details.prices.map((price) => price[1]);
  // console.log('🚀 ~ coin-data-row.jsx:28 ~ CoinRow ~ prices:', details);

  return (
    <tr className="border-t-3 border-solid border-slate-700/80">
      <td>
        <div className="flex items-center gap-4 py-2 px-2 h-full">
          <div className="relative w-8 h-8">
            <Image
              src={image}
              alt={formattedSymbol}
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <div>
            <p>{formattedSymbol}</p>
            {/* <p>سکه</p> */}
          </div>
        </div>
      </td>
      <td className="py-2">
        <p>{formattedPrice}</p>
        <p>تومان</p>
      </td>
      <td className={`py-2 px-2 ${changeColor}`}>{changePercentage}</td>
      <td className="py-2 w-[10vw]">
        <div className="relative w-[15vw] h-[8vh]">
          <Chart prices={prices} changePercentage={priceChange} />
        </div>
      </td>
      <td className="text-left py-2 px-2">
        <Link
          href="#"
          className="rounded-xl bg-slate-900 px-4 py-2 hover:bg-slate-900/80"
        >
          خرید/فروش
        </Link>
      </td>
    </tr>
  );
}
