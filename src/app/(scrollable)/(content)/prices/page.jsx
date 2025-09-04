import MainNav from '@/components/nav/main-nav';
import OtherCoins from './_components/other-coins';
import CoinsSummary from 'app/(scrollable)/(marketing)/_components/coins-summary';
import { redirect } from 'next/navigation';

export default async function Prices({ searchParams }) {
  const currentPage = (await searchParams)?.page || redirect('/prices?page=1');

  return (
    <>
      <MainNav />
      <OtherCoins />
      <CoinsSummary limit={20} page={currentPage} searchParams={searchParams} />
    </>
  );
}
