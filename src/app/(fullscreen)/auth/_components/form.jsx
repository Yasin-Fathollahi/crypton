'use client';
import { useActionState } from 'react';
import PasswordInput from '../_components/password-input';
// import { authAction } from 'lib/supabase/supabase-actions';
import { signup } from 'lib/actions';
import Link from 'next/link';

export default function Form({ mode }) {
  const [formState, formAction, isPending] = useActionState(signup);

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
      {mode === 'signup' && (
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-slate-300/60 text-sm">
            لطفا نام و نام خانوادگی خود را وارد کنید
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="نام و نام خانوادگی"
            className="block w-full border-2 border-solid border-slate-700/80 rounded-sm placeholder:text-slate-600/60 px-2 py-2"
          />
          {formState?.errors?.email && (
            <p className="text-red-500/75 font-semibold text-xs">
              {formState.errors.email[0]}
            </p>
          )}
        </div>
      )}
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
        {formState?.errors?.email && (
          <p className="text-red-500/75 font-semibold text-xs">
            {formState.errors.email[0]}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-slate-300/60 text-sm">
          لطفا رمز خود را وارد کنید
        </label>
        <PasswordInput />
        {formState?.errors?.password && (
          <p className="text-red-500/75 font-semibold text-xs">
            {formState.errors.password[0]}
          </p>
        )}
      </div>
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
