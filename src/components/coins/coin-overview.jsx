import Image from 'next/image';
import Link from 'next/link';
export default function CoinOverview({ image, symbol, name }) {
  let content = (
    <div className="flex items-center gap-4 py-2 px-2 h-full">
      <div className="relative w-8 h-8">
        <Image
          src={image}
          alt={symbol}
          fill
          sizes="32px"
          className="object-contain"
        />
      </div>
      <p>{symbol}</p>
    </div>
  );

  if (name) {
    content = (
      <Link href="#" className="flex items-center gap-2 py-2 px-4 h-full">
        <div className="w-8 h-8">
          <Image
            src={image}
            alt={symbol}
            height="32"
            width="32"
            className="object-contain"
          />
        </div>
        <p className="whitespace-nowrap text-white">{name}</p>
        <p className="text-slate-100/80">{symbol}</p>
      </Link>
    );
  }
  return content;
}
