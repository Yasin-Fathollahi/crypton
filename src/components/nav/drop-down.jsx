import { FaCaretDown } from 'react-icons/fa6';
import Link from 'next/link';
export default function DropDown({ title, items }) {
  return (
    <li className="relative group block z-10">
      <button
        className="p-2 flex items-center gap-1 hover:cursor-default group-hover:text-blue-500"
        href="#"
      >
        <FaCaretDown className="size-2" />
        <span>{title}</span>
      </button>
      <div className="absolute bottom-0 translate-y-[90%] opacity-0 group-hover:opacity-100 bg-slate-800 p-4 rounded-lg whitespace-nowrap transition-all ease-in-out delay-100 group-hover:translate-y-full pointer-events-none group-hover:pointer-events-auto">
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.name} className="hover:text-blue-500 white">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
