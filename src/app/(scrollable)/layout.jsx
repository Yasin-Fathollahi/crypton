import Footer from '@/components/footer/Footer';

export default function RootLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
