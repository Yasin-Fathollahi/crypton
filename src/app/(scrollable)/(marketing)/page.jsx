import HeroSection from './_components/hero';
import CoinsSummary from './_components/coins-summary';
import Features from './_components/features';
import OnchainSection from './_components/onchain';
import FaqSection from './_components/faq';

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <CoinsSummary limit={10} isHome />
      <Features />
      <OnchainSection />
      <FaqSection />
    </>
  );
}
