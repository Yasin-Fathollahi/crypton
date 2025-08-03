import Link from 'next/link';
import Image from 'next/image';
import {
  formatChangePercentage,
  formatPrice,
} from '../../../../utils/formatters';
import { getCoinDetails } from 'lib/coins';
import Chart from '../../chart/chart';

export default async function CoinRow({
  coin: {
    image,
    symbol,
    price,
    daily_change_price: priceChange,
    low,
    high,
    id,
  },
}) {
  const { changePercentage, changeColor } = formatChangePercentage(priceChange);
  const formattedPrice = formatPrice(price);
  const formattedSymbol = symbol.replace('_', '/');

  const coinDetails = await getCoinDetails(id, 1);
  const prices = coinDetails.prices.map((price) => price[1]);

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
