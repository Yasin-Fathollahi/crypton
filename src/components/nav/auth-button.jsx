'use client';
import { useActionState } from 'react';
import { logout } from 'lib/auth-actions';

export default function LogoutButton({ sessionId }) {
  const [state, formAction, isPending] = useActionState(
    logout.bind(null, sessionId)
  );

  return (
    <form action={formAction}>
      <button
        disabled={isPending}
        className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full font-semibold hover:cursor-pointer"
      >
        {isPending ? 'درحال خروج...' : 'خروج از حساب'}
      </button>
    </form>
  );
}
