import Image from 'next/image';
import Link from 'next/link';

import Header from './_components/header';
import CoinsSummary from './_components/coins-summary';
import getCoinsData from 'lib/coins';

export default async function HomePage() {
  // console.log(await getCoinsData());

  return (
    <>
      <Header />
      <CoinsSummary />
    </>
  );
}
