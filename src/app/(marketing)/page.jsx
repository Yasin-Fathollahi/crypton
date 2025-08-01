import Header from './_components/header';
import CoinsSummary from './_components/coins-summary';
import Features from './_components/features';
import OnchainSection from './_components/onchain';
import FaqSection from './_components/faq';

export default async function HomePage() {
  return (
    <>
      <Header />
      <CoinsSummary />
      <Features />
      <OnchainSection />
      <FaqSection />
    </>
  );
}
