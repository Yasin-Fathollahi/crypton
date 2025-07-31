import Link from 'next/link';
export default function OnchainSection() {
  return (
    <section className="h-screen px-32 bg-white">
      <div>
        <p>تحلیل آنچین با کریپتون</p>
        <h2>دنیای امور مالی غیر متمرکر</h2>
        <ul>
          <li>
            <p>
              سواپ DeFi کوین‌ها - به‌سادگی ارزهای دیفای رو با هم مبادله کن و سه
              برابر سود دریافت کن.
            </p>
          </li>
          <li>
            <p>Crypton Onchain - کلیدها دست خودته، دارایی‌ات امنه</p>
          </li>
          <li>
            <p>
              💰 درآمدزایی بدون محدودیت - با سرمایه‌گذاری بدون دوره قفل (No
              Lock-Up)، سود پایدار و مطمئن دریافت کن
            </p>
          </li>
        </ul>
        <div>
          <Link href="#">اطلاعات بیشتر</Link>
          <Link href="#">آنچین خودت رو بگیر</Link>
        </div>
      </div>
      <div></div>
    </section>
  );
}
