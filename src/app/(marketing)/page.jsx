import Image from 'next/image';
import Link from 'next/link';

import Header from './_components/header';
import CoinsSummary from './_components/coins-summary';
import Features from './_components/features';
import OnchainSection from './_components/onchain';

export default async function HomePage() {
  return (
    <>
      <Header />
      <CoinsSummary />
      <Features />
      <OnchainSection />
    </>
  );
}
