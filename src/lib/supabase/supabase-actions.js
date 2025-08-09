'use server';
import { authenticateWithEmail } from 'lib/supabase/supabase-auth';
import { redirect } from 'next/navigation';
import { validate } from '../../../utils/validate';
export async function authAction(mode, prevState, formData) {
  const fd = Object.fromEntries(formData.entries());
  const errors = validate(fd);
  const state = {
    errors,
    successMessage: '',
  };

  try {
    const { id } = await authenticateWithEmail(fd, mode);

    state.successMessage =
      mode === 'signup'
        ? 'ثبت نام موفقیت آمیز بود! لطفا برای تکمیل ثبت نام ایمیل خود را چک کنید.'
        : 'خوش آمدید.';
    // redirect('/profile');
  } catch (error) {
    if (error.message === 'Email not confirmed') {
      errors.password.push(
        'لطفا ابتدا ایمیل خود را چک کرده و بر روی لینک تایید کلیک کنید.'
      );
    }

    if (error.name === 'AuthRetryableFetchError') {
      errors.password.push('لطفا اینترنت خود را بررسی و دوباره امتحان کنید.');
    }

    if (error.code === 'invalid_credentials') {
      errors.password.push('ایمیل یا رمز عبور نادرست است.');
    }

    console.error(error);
  }

  return state;
}
