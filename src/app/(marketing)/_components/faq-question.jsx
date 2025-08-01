import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
export default function FaqQuestion({ question, children, isOpen, id, open }) {
  return (
    <li
      className={`border-solid border-b-2 border-gray-700/50  ${
        isOpen ? 'pb-6' : undefined
      }`}
    >
      <button
        onClick={open.bind(null, id)}
        className={`flex justify-between text-2xl font-semibold hover:cursor-pointer w-full py-6`}
      >
        <h3>{question}</h3>
        <div>
          {!isOpen && <PlusIcon className="size-7 text-white" />}
          {isOpen && <MinusIcon className="size-7 text-white" />}
        </div>
      </button>
      <div
        className={`text-gray-400 line text-lg/relaxed transition-all duration-300  overflow-y-hidden ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 h-0'
        }`}
      >
        {children}
      </div>
    </li>
  );
}
