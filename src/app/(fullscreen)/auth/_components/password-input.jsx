'use client';
import { useState } from 'react';

const openEye = (
  <svg
    fill="currentcolor"
    height="15"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11Zm0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53C13.344 4.706 10.692 3 7.5 3Zm0 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

const closedEye = (
  <svg
    fill="currentcolor"
    height="15"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M14.765 6.076a.5.5 0 0 1 .159.689 9.519 9.519 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.472 8.472 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 0 1-.707-.707l1.2-1.201A9.521 9.521 0 0 1 .077 6.765a.5.5 0 1 1 .848-.53 8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.159Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

export default function PasswordInput() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleEye() {
    setIsOpen((prevState) => !prevState);
  }

  const eye = isOpen ? openEye : closedEye;

  return (
    <div className="relative">
      <input
        type={isOpen ? 'text' : 'password'}
        name="password"
        id="password"
        placeholder="رمز عبور"
        className="block w-full border-2 border-solid border-slate-700/80 rounded-sm placeholder:text-slate-600/60 px-2 py-2"
      />
      <button
        type="button"
        onClick={handleToggleEye}
        className="absolute left-4 top-1/2 -translate-y-1/2 hover:cursor-pointer"
        aria-label={isOpen ? 'Hide password' : 'Hide password'}
      >
        {eye}
      </button>
    </div>
  );
}
