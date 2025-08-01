import {
  Handshake,
  Zap,
  ArrowUpNarrowWide,
  ChevronsLeftRightEllipsis,
} from 'lucide-react';

import Feature from '../_components/feature';
export default function Features() {
  return (
    <section className="px-32 pb-32">
      <h2 className="text-2xl text-gray-400">امکانات کریپتون</h2>
      <article className="flex gap-12 mx-auto w-fit pt-12">
        <Feature
          title="بازارهای معاملاتی پیشرفته"
          description="۱۳۰+ بازار معاملاتی در پایه‌بازارهای تومان و تتر"
          Icon={Handshake}
        />
        <Feature
          title="خرید و فروش آنی"
          description="خرید و فروش آنی و آسان ۱۵۰+ کوین متنوع"
          Icon={Zap}
        />
        <Feature
          title="اعتبار معاملاتی"
          description="دریافت اعتبار معاملاتی و طرح‌های ویژه برای به‌دست‌آوردن سود بیشتر"
          Icon={ArrowUpNarrowWide}
        />
        <Feature
          title="API پیشرفته"
          description="بهره‌مندی از تمام امکانات کریپتون با استفاده از API"
          Icon={ChevronsLeftRightEllipsis}
        />
      </article>
    </section>
  );
}
