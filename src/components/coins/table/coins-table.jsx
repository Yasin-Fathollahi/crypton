import Link from 'next/link';
import getCoinsData, { getCoinDetails } from 'lib/coins';
import CoinRow from './coin-data-row';
import ErrorBox from '@/components/error';

export default async function CoinsTable({ limit }) {
  const { data: coins, error } = await getCoinsData(limit);
  const coinsDetails = await Promise.allSettled(
    coins.map((coin) => getCoinDetails(coin.id, 1))
  );

  // {symbol: 'BTC_IRT', price: '10483091070', daily_change_price: -0.45, low: '10406737043', high: '10574328061', …}

  return (
    <article className="mt-10">
      {error && (
        <ErrorBox title={error.title} description={error.description} />
      )}
      {coins && (
        <>
          <div className="flex justify-between border-3 border-b-0 border-solid border-slate-700/80 rounded-t-2xl">
            <div className="flex gap-6 p-4 ">
              <Link href="#" className="hover:text-blue-400">
                رمز ارز های برتر
              </Link>
              <Link href="#" className="hover:text-blue-400">
                پرسود ها
              </Link>
              <Link href="#" className="hover:text-blue-400">
                پرضرر ها
              </Link>
            </div>
            <div className="flex rounded-xl bg-slate-900 border-1 border-solid border-slate-700/80 m-2">
              <button className=" px-4 hover:cursor-pointer rounded-xl">
                تتر
              </button>
              <button className="px-4 hover:cursor-pointer rounded-xl">
                تومان
              </button>
            </div>
          </div>

          <table className="w-full border-3 border-solid border-slate-700/80">
            <thead>
              <tr className="text-right">
                <th className="py-4 px-2">نام رمز ارز</th>
                <th className="py-4 px-2">آخرین قیمت</th>
                <th className="py-4 px-2">تغییرات</th>
                <th className="py-4 px-2 ">نمودار 24 ساعت (به دلار آمریکا)</th>
                <th className="py-4 px-2"></th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => (
                <CoinRow
                  key={coin.symbol}
                  coin={{ ...coin, details: coinsDetails[index].value }}
                />
              ))}
            </tbody>
          </table>
          <div className="text-center py-4 border-3 border-t-0 border-solid border-slate-700/80 rounded-b-2xl ">
            <Link href="#" className="hover:text-blue-400 text-lg">
              مشاهده همه ی ارز ها
            </Link>
          </div>
        </>
      )}
    </article>
  );
}
