import Link from 'next/link';
export default function FooterLinks() {
  return (
    <div className="pt-18 flex gap-24">
      <div>
        <p className="font-bold text-white text-xl mb-4">امکانات</p>
        <ul className="flex flex-col gap-3 text-slate-100/80 text-sm">
          <li>
            <Link className="hover:text-blue-500" href="#">
              اسپات
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              خرید سریع
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              وام
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              استیکینگ
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              بات
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              کارت هدیه
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              کریپتون آنچین
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold text-white text-xl mb-4">آکادمی کریپتون</p>
        <ul className="flex flex-col gap-3 text-slate-100/80 text-sm">
          <li>
            <Link className="hover:text-blue-500" href="#">
              آنالیز و بررسی
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              اصطلاحات
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              بیتکوین
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              اتریوم چیست؟
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              بلاکچین چیست؟
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              نحوه خرید بیتکوین
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              نحوه خرید اتریوم
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              کریپتو چیست؟
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              دیفای چیست؟
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold text-white text-xl mb-4">
          خرید ارز های دیجیتال
        </p>
        <ul className="flex flex-col gap-3 text-slate-100/80 text-sm">
          <li>
            <Link className="hover:text-blue-500" href="#">
              خرید بیتکوین
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              خرید اتریوم
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              خرید تتر
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              خرید تون کوین
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              خرید پپه
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              خرید دوج کوین
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold text-white text-xl mb-4">
          قیمت ارز های دیجیتال
        </p>
        <ul className="flex flex-col gap-3 text-slate-100/80 text-sm">
          <li>
            <Link className="hover:text-blue-500" href="#">
              کاوشگر قیمت ارز دیجیتال
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              قیمت بیتکوین
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              قیمت اتریوم
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              قیمت تتر
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              قیمت تون کوین
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              قیمت پپه
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              قیمت دوج کوین
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold text-white text-xl mb-4">درباره کریپتون</p>
        <ul className="flex flex-col gap-3 text-slate-100/80 text-sm">
          <li>
            <Link className="hover:text-blue-500" href="#">
              درباره ما
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              پارتنر ها
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              امنیت کریپتون
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              استخدام
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              دعوت دوستان
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="#">
              قوانین استفاده
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
