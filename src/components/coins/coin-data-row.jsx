import Link from 'next/link';
import Image from 'next/image';
import { formatChangePercentage, formatPrice } from '../../../utils/formatters';

export default function CoinRow({
  coin: { image, symbol, price, daily_change_price: priceChange, low, high },
  // {symbol: 'BTC_IRT', price: '10483091070', daily_change_price: -0.45, low: '10406737043', high: '10574328061', …}
}) {
  const { changePercentage, changeColor } = formatChangePercentage(priceChange);
  const formattedPrice = formatPrice(price);
  const formattedSymbol = symbol.replace('_', '/');
  return (
    <tr className="border-t-3 border-solid border-slate-700/80">
      <td className="flex items-center gap-4 py-4 px-2 ">
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
      </td>
      <td className="py-4 px-2">
        <p>{formattedPrice}</p>
        <p>تومان</p>
      </td>
      <td className={`py-4 px-2 ${changeColor}`}>{changePercentage}</td>
      <td className="py-4 px-2">chart</td>
      <td className="text-left py-4 px-2">
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
