import Link from 'next/link';
import MainNav from '@/components/nav/main-nav';
import Form from './_components/form';
export default async function auth({ searchParams }) {
  const { mode } = await searchParams;

  return (
    <>
      <MainNav isAuth />
      <main className="grow">
        <div className="p-12 rounded-lg bg-slate-900/40 w-2/5 mx-auto mt-32">
          <div className="mb-4">
            <p className="text-bold text-2xl mb-4">
              {mode === 'login' ? 'ورود به حساب کریپتون' : 'ثبت نام در کریپتون'}
            </p>
            <p>
              حساب {mode === 'login' ? 'ندارید' : 'دارید'}؟{' '}
              <Link
                href={`auth/?mode=${mode === 'login' ? 'signup' : 'login'}`}
                className="text-blue-400"
              >
                {mode === 'login' ? 'ثبت نام' : 'ورود'}
              </Link>
            </p>
          </div>
          <Form mode={mode} />
        </div>
      </main>
      <footer>
        <hr />
      </footer>
    </>
  );
}
