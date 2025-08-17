import SocialLogos from './social-logo-links';
import FooterLinks from './footer-links';
import CryptonLogo from '@/components/crypton/crypton-logo';
export default function Footer() {
  return (
    <footer className="bg-slate-900/50 px-32 pt-24 pb-16">
      <div className="flex gap-4 items-center ">
        <div className="flex gap-4 items-center">
          <CryptonLogo />
          <p className="font-semibold text-4xl text-white">
            <span className="text-4xl font-extrabold text-blue-500">ک</span>
            <span className="text-4xl font-semibold">ریپتون</span>
          </p>
        </div>
        <hr className="w-full text-slate-200/60" />
        <SocialLogos />
      </div>
      <div className="flex justify-between items-center">
        <FooterLinks />
        <div>QRCODE</div>
      </div>
      <p className="text-sm mt-16 flex gap-4 justify-center">
        <span className="text-slate-200/60">&copy; Crypton 2025</span>|
        <span>کلیه حقوق این سایت متعلق به کریپتون است.</span>
      </p>
    </footer>
  );
}
