'use client';
import { useActionState } from 'react';
import PasswordInput from '../_components/password-input';
import { authAction } from 'actions';
import Link from 'next/link';

export default function Form({ mode }) {
  const [formState, formAction, isPending] = useActionState(
    authAction.bind(null, mode),
    {
      successMessage: '',
      errors: {
        email: [],
        password: [],
      },
    }
  );

  let buttonText;
  if (!isPending) {
    buttonText = mode === 'login' ? 'ورود' : 'ثبت نام';
  } else {
    buttonText = (
      <span className="animate-pulse">
        {mode === 'login' ? 'درحال ورود...' : 'درحال ثبت نام...'}
      </span>
    );
  }
  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-slate-300/60 text-sm">
          لطفا ایمیل خود را وارد کنید
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ایمیل"
          className="block w-full border-2 border-solid border-slate-700/80 rounded-sm placeholder:text-slate-600/60 px-2 py-2"
        />
        {formState.errors.email.length > 0 &&
          formState.errors.email.map((error) => (
            <p key={error} className="text-red-500/75 font-semibold text-xs">
              {error}
            </p>
          ))}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-slate-300/60 text-sm">
          لطفا رمز خود را وارد کنید
        </label>
        <PasswordInput />
        {formState.errors.password.length > 0 &&
          formState.errors.password.map((error) => (
            <p key={error} className="text-red-500/75 font-semibold text-xs">
              {error}
            </p>
          ))}
      </div>
      {formState.successMessage && (
        <p className="text-green-600 font-semibold text-sm">
          {formState.successMessage}
        </p>
      )}
      <button className="block bg-blue-500 rounded-sm py-2 font-bold text-lg hover:bg-blue-600 hover:cursor-pointer">
        {buttonText}
      </button>
      <Link
        href={`auth?mode=${mode}`}
        className="text-sm text-blue-400 text-bold"
      >
        رمز عبورم را فراموش کرده ام
      </Link>
    </form>
  );
}
