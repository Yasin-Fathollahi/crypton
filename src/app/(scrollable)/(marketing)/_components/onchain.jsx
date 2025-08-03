import Link from 'next/link';
import Image from 'next/image';
import mobileImage from '../../../../assets/mobile.webp';
export default function OnchainSection() {
  return (
    <section className="h-screen px-32 pt-12 bg-white text-gray-900 flex justify-between items-center">
      <div>
        <p className="font-bold tracking-wide text-blue-600 mb-8 text-2xl">
          تحلیل آنچین با کریپتون
        </p>
        <h2 className="text-5xl font-bold mb-12">دنیای امور مالی غیر متمرکز</h2>
        <ul className="text-2xl flex flex-col gap-4">
          <li>
            <p>
              <strong>سواپ DeFi کوین‌ها. </strong>{' '}
              <span className="text-gray-600">
                تا سه برابر سود با مبادله ارزهای دیفای
              </span>
            </p>
          </li>
          <li>
            <p>
              <strong>Crypton Onchain. </strong>
              <span className="text-gray-600">
                کلیدها دست خودته، دارایی‌ات امنه
              </span>
            </p>
          </li>
          <li>
            <p>
              <strong>درآمدزایی بدون محدودیت. </strong>
              <span className="text-gray-600">
                سرمایه‌گذاری بدون دوره قفل (No Lock-Up)
              </span>
            </p>
          </li>
        </ul>
        <div className="flex items-center gap-8 mt-12 ">
          <Link
            href="#"
            className="border-solid border-2 border-gray-700/50 rounded-full flex justify-between items-center px-8 py-2 font-semibold text-lg hover:bg-gray-700/5"
          >
            آنچین خودت رو بگیر
          </Link>
          <Link
            href="#"
            className="bg-linear-to-r from-gray-900 via-30% via-gray-700 to-gray-900 border-solid border-2 border-gray-700/50 rounded-full flex justify-between items-center text-white px-12 py-3 font-semibold text-lg"
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
      <div>
        <Image src={mobileImage} alt="mobile crypton app" className="w-full" />
      </div>
    </section>
  );
}
