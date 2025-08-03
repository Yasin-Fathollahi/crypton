import '../globals.css';
export const metadata = {
  title: 'کریپتون',
  description: 'راحتی و امنیت در معاملات را با ما تجربه کنید.',
};

export default function AuthLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="h-screen flex flex-col font-vazir bg-linear-to-br/increasing from-15% from-slate-900 via-50% via-black to-75% to-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
