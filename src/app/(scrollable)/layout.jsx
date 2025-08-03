import '../globals.css';
import Footer from '@/components/coins/footer/Footer';
export const metadata = {
  title: 'کریپتون',
  description: 'راحتی و امنیت در معاملات را با ما تجربه کنید.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir bg-linear-to-b/increasing from-25% from-slate-900 via-50% via-black to-slate-950 text-white/90">
        {children}
        <Footer />
      </body>
    </html>
  );
}
