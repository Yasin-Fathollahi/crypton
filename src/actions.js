'use server';
import { authenticateWithEmail } from 'lib/auth';
import { validate } from '../utils/validate';
export async function authAction(mode, prevState, formData) {
  const fd = Object.fromEntries(formData.entries());
  const errors = validate(fd);
  const state = {
    errors,
    successMessage: '',
  };

  try {
    const response = await authenticateWithEmail(fd, mode);

    state.successMessage =
      mode === 'signup'
        ? 'ثبت نام موفقیت آمیز بود! لطفا برای تکمیل ثبت نام ایمیل خود را چک کنید.'
        : 'خوش آمدید.';
  } catch (error) {
    if (error.message !== 'Password should be at least 6 characters.') {
      if (error.message === 'Email not confirmed') {
        errors.password.push(
          'لطفا ابتدا ایمیل خود را چک کرده و بر روی لینک تایید کلیک کنید.'
        );
      }
    }

    console.error(error);
  }

  return state;
}
