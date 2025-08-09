import Footer from '@/components/coins/footer/Footer';

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
