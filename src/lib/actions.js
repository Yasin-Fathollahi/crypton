'use server';
const bcrypt = require('bcrypt');
import { redirect } from 'next/navigation';
import { validate } from '../../utils/validate';
import { supabase } from './supabase/supabase-client';

export async function signup(prevState, formData) {
  const fd = Object.fromEntries(formData.entries());
  const { errors, data } = validate(fd);

  if (!data) {
    return errors;
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    // saving user data to database
    const { userData, error } = await supabase
      .from('profiles')
      .insert([
        {
          fullname: data.fullname,
          email: data.email,
          password: hashedPassword,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    console.log(userData);

    redirect('/');
  } catch (error) {
    console.error(error);
  }
}

export async function login() {}
