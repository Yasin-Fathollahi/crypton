'use client';
import { useState } from 'react';
import FaqQuestion from './faq-question.jsx';
export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState('');

  function open(id) {
    if (openQuestion === id) {
      setOpenQuestion('');
    } else {
      setOpenQuestion(id);
    }
  }

  return (
    <section className="bg-slate-900/90 flex justify-between gap-24 py-32 px-44">
      <div>
        <h2 className="text-3xl font-bold pt-4">سوالات متداول شما</h2>
      </div>
      <div className="flex-1">
        <ul>
          <FaqQuestion
            open={open}
            id="q1"
            isOpen={openQuestion === 'q1'}
            question="ارز دیجیتال (کریپتوکارنسی) چیست؟"
          >
            <p>
              ارز دیجیتال یک نوع پول دیجیتالی است که به صورت غیرمتمرکز و بدون
              نیاز به بانک مرکزی فعالیت می‌کند. معروف‌ترین آن‌ها بیت‌کوین است،
              اما هزاران ارز دیگر مثل اتریوم، سولانا و دوج‌کوین هم وجود دارند.
              این ارزها معمولاً با استفاده از تکنولوژی بلاک‌چین کار می‌کنند.
            </p>
          </FaqQuestion>
          <FaqQuestion
            open={open}
            id="q2"
            isOpen={openQuestion === 'q2'}
            question="از کجا می‌توان ارز دیجیتال خرید؟"
          >
            <p>
              برای خرید ارز دیجیتال می‌توانید از صرافی‌های آنلاین استفاده کنید
              مثل کریپتون استفاده کنید. حتماً قبل از استفاده از هر صرافی، اعتبار
              و امنیت آن را بررسی کنید.
            </p>
          </FaqQuestion>
          <FaqQuestion
            open={open}
            id="q3"
            isOpen={openQuestion === 'q3'}
            question="چطور می‌توان ارز دیجیتال خرید؟"
          >
            <p>برای خرید ارز دیجیتال معمولاً باید مراحل زیر را طی کنید:</p>
            <ol className="list-decimal list-inside mt-4">
              <li>در یک صرافی معتبر ثبت‌نام کنید.</li>
              <li>هویت خود را احراز کنید.</li>
              <li>حساب خود را شارژ کنید (با کارت بانکی یا تتر).</li>
              <li>ارز موردنظر را انتخاب کرده و خرید را انجام دهید.</li>
            </ol>
          </FaqQuestion>
          <FaqQuestion
            open={open}
            id="q4"
            isOpen={openQuestion === 'q4'}
            question="چطور می‌توان ارز دیجیتال معامله کرد؟"
          >
            <p>
              معامله ارز دیجیتال یعنی خرید و فروش آن برای کسب سود. این کار را
              می‌توان از طریق صرافی‌ها انجام داد. معامله‌گران حرفه‌ای از تحلیل
              تکنیکال و اخبار بازار استفاده می‌کنند، ولی برای شروع می‌توانید با
              مبادله ساده ارزها کار خود را آغاز کنید. توجه داشته باشید که بازار
              کریپتو نوسان زیادی دارد و ریسک‌پذیر است.
            </p>
          </FaqQuestion>
          <FaqQuestion
            open={open}
            id="q5"
            isOpen={openQuestion === 'q5'}
            question="چطور می‌توان ارز دیجیتال به دست آورد؟"
          >
            <p>چند راه برای به دست آوردن ارز دیجیتال وجود دارد:</p>
            <ul className="list-disc list-inside mt-4">
              <li>خرید مستقیم از صرافی</li>
              <li>
                ماینینگ (استخراج) ارزهایی مثل بیت‌کوین (نیاز به سخت‌افزار و برق
                دارد)
              </li>
              <li>
                کسب درآمد از سایت‌ها یا اپ‌هایی که در ازای کار یا مشارکت به شما
                ارز دیجیتال می‌دهند
              </li>
              <li>
                ایردراپ‌ها که پروژه‌ها به صورت رایگان ارز بین کاربران پخش
                می‌کنند
              </li>
              <li>فریلنسری و دریافت دستمزد به صورت ارز دیجیتال</li>
            </ul>
          </FaqQuestion>
        </ul>
      </div>
    </section>
  );
}
