import Link from 'next/link';
import {
  FaInstagram,
  FaXTwitter,
  FaTelegram,
  FaWhatsapp,
  FaGithub,
} from 'react-icons/fa6';

const linkClasses =
  'border-2 border-solid border-slate-100/60 rounded-full w-10 h-10 flex items-center justify-center hover:border-white';

export default function SocialLogos() {
  return (
    <ul className="flex gap-4 text-gray-200/60">
      <li className={linkClasses}>
        <Link href="/" className="p-1.5" target="_blank">
          <FaXTwitter className="size-6" />
        </Link>
      </li>
      <li className={linkClasses}>
        <Link
          href="https://www.instagram.com/f._yasin?igsh=MW56cGs0YjBwMXZ6ZQ=="
          className="p-1.5"
          target="_blank"
        >
          <FaInstagram className="size-6" />
        </Link>
      </li>
      <li className={linkClasses}>
        <Link
          href="https://t.me/SomeRandomGuy00"
          className="p-1.5"
          target="_blank"
        >
          <FaTelegram className="size-6" />
        </Link>
      </li>
      <li className={linkClasses}>
        <Link
          href="https://wa.me/qr/TDUR2PHEPIE7M1"
          className="p-1.5"
          target="_blank"
        >
          <FaWhatsapp className="size-6" />
        </Link>
      </li>
      <li className={linkClasses}>
        <Link
          href="https://github.com/Yasin-Fathollahi"
          className="p-1.5"
          target="_blank"
        >
          <FaGithub className="size-6" />
        </Link>
      </li>
    </ul>
  );
}
