import MainNav from '@/components/nav/main-nav';
import Link from 'next/link';
export default async function auth({ searchParams }) {
  const { mode } = await searchParams;
  console.log(mode);

  return (
    <>
      <MainNav />
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

          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-slate-300/60 text-sm">
                لطفا ایمیل خود را وارد کنید
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="ایمیل"
                className="block w-full border-2 border-solid border-slate-700/80 rounded-sm placeholder:text-slate-600/60 px-2 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-slate-300/60 text-sm">
                لطفا رمز خود را وارد کنید
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="رمز عبور"
                className="block w-full border-2 border-solid border-slate-700/80 rounded-sm placeholder:text-slate-600/60 px-2 py-2"
              />
            </div>
            <button className="block bg-blue-500 rounded-sm py-2 font-bold text-lg hover:bg-blue-600 hover:cursor-pointer">
              {mode === 'login' ? 'ورود' : 'ثبت نام'}
            </button>
            <Link
              href={`auth/${mode}`}
              className="text-sm text-blue-400 text-bold"
            >
              رمز عبورم را فراموش کرده ام
            </Link>
          </form>
        </div>
      </main>
      <footer>
        <hr />
      </footer>
    </>
  );
}
