import Link from 'next/link';
import CryptonText from '@/components/crypton/crypton-text';
import CryptonLogo from '@/components/crypton/crypton-logo';
import LogoutButton from './auth-button';
import { verifySession } from 'lib/session';
import DropDown from './drop-down';

function NavLinks() {
  return (
    <ul className="flex items-center gap-4 transition-all duration-100">
      <DropDown
        title="معامله"
        items={[
          { name: 'معامله اسپات', href: '#' },
          { name: 'معامله تعهدی', href: '#' },
          { name: 'خرید و فروش آنی', href: '#' },
          { name: 'تبدیل', href: '#' },
          { name: 'تاریخچه معاملات', href: '#' },
        ]}
      />
      <li>
        <Link className="hover:text-blue-500 p-2" href="/buy">
          خرید ارز دیجیتال
        </Link>
      </li>
      <li>
        <Link className="hover:text-blue-500 p-2" href="/prices">
          قیمت ارز دیجیتال
        </Link>
      </li>
      <li>
        <Link className="hover:text-blue-500 p-2" href="/profile">
          پروفایل
        </Link>
      </li>
    </ul>
  );
}

export default async function MainNav({ isHome, isAuth }) {
  let authData, authButton;
  if (!isAuth) {
    authData = await verifySession(true);

    authButton = authData.sessionId ? (
      <LogoutButton sessionId={authData.sessionId} />
    ) : (
      <Link
        href="auth/?mode=login"
        className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold hover:cursor-pointer"
      >
        ثبت نام / ورود
      </Link>
    );
  }

  let content = (
    <nav className="flex justify-between items-center w-full mx-auto p-4 ">
      <div className="flex items-center gap-18">
        <div>
          <Link href="/">
            <div className="flex gap-4 items-center">
              <CryptonLogo nav />
              <CryptonText />
            </div>
          </Link>
        </div>
        <NavLinks />
      </div>
      <div className="flex items-center gap-8">{!isAuth && authButton}</div>
    </nav>
  );

  if (isHome) {
    content = (
      <nav className="bg-linear-to-r from-gray-900 via-30% via-gray-700 to-gray-900 border-solid border-2 border-gray-700/50 rounded-full flex justify-between items-center w-1/2 mx-auto p-2 fixed top-4 left-1/2 -translate-x-1/2">
        <div>
          <Link href="/">
            <CryptonLogo nav />
          </Link>
        </div>
        <NavLinks />
        {authButton}
      </nav>
    );
  }
  return content;
}
