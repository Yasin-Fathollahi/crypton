import getCoinsData from 'lib/coins';
import CoinRow from './coin-data-row';

export default async function CoinsTable({ limit }) {
  const coins = await getCoinsData(limit);
  console.log(coins);

  // {symbol: 'BTC_IRT', price: '10483091070', daily_change_price: -0.45, low: '10406737043', high: '10574328061', …}

  return (
    <article className="mt-10">
      <div className="flex justify-between border-3 border-b-0 border-solid border-slate-700/80 rounded-t-2xl">
        <div className="flex gap-6 p-4 ">
          <button>رمز ارز های برتر</button>
          <button>پرسود ها</button>
          <button>پرضرر ها</button>
        </div>
        <div className="flex rounded-xl bg-slate-900 border-1 border-solid border-slate-700/80 m-2">
          <button className=" px-4 hover:cursor-pointer rounded-xl">تتر</button>
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
            <th className="py-4 px-2">نمودار 24 ساعت</th>
            <th className="py-4 px-2"></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CoinRow key={coin.symbol} coin={coin} />
          ))}
        </tbody>
      </table>
    </article>
  );
}
