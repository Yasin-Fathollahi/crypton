import MainNav from '@/components/nav/main-nav';

export default function RegularNavLayout({ children }) {
  return (
    <>
      <MainNav />
      {children}
    </>
  );
}
