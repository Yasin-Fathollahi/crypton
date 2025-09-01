import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  formatChangePercentage,
  formatPrice,
} from '../../../../utils/formatters';
import CoinOverview from '../coin-overview';

const Chart = dynamic(() => import('../../chart/chart'), {
  loading: () => <p className="text-white text-center">درحال دریافت چارت...</p>,
});

export default async function CoinRow({
  coin: { image, symbol, price, daily_change_price: priceChange, details },
}) {
  const { changePercentage, changeColor } = formatChangePercentage(priceChange);
  const formattedPrice = formatPrice(price);
  const formattedSymbol = symbol.replace('_', '/');

  const prices = details.prices.map((price) => price[1]);

  return (
    <tr className="border-t-3 border-solid border-slate-700/80">
      <td>
        <CoinOverview image={image} symbol={formattedSymbol} />
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
