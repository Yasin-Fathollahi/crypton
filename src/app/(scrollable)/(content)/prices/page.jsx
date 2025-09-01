import MainNav from '@/components/nav/main-nav';
import Link from 'next/link';
import OtherCoins from './_components/other-coins';

export default async function Prices() {
  // const { data: coins, error } = await getCoinsData(10);
  // const coinsDetails = await Promise.allSettled(
  //   coins.map((coin) => getCoinDetails(coin.id, 1))
  // );
  return (
    <>
      <MainNav />
      <OtherCoins
      //  coins={coinsDetails}
      />
    </>
  );
}
