export default function AuthLayout({ children }) {
  return (
    <main className="h-screen flex flex-col font-vazir bg-linear-to-br/increasing from-15% from-slate-900 via-50% via-black to-75% to-slate-950 text-white">
      {children}
    </main>
  );
}
