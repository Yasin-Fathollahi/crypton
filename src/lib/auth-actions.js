'use server';
const bcrypt = require('bcrypt');
import { redirect } from 'next/navigation';
import { validate, verifyLoginCredentials } from '../../utils/validate';
import { supabase } from './supabase/supabase-client';
import { createSession, deleteSession, verifySession } from './session';
import { cookies } from 'next/headers';

async function signup(prevState, formData) {
  const fd = Object.fromEntries(formData.entries());
  const { errors, data } = validate(fd);

  if (!data) {
    return errors;
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    // saving user data to database
    const { data: userData, error } = await supabase
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

    const userId = userData[0].user_id;

    // create Session
    await createSession(userId);
  } catch (error) {
    console.error(error);
    return;
  }
  redirect('/dashboard');
}

async function login(prevState, formData) {
  const fd = Object.fromEntries(formData.entries());
  const { data: userId, errors } = await verifyLoginCredentials(fd);
  if (!userId) {
    console.error(errors);

    return { data: null, errors };
  }

  try {
    await createSession(userId);
  } catch (error) {
    // if user has a session already in the db
    if (error.code === '23505') {
      await deleteSession(userId);
      await createSession(userId);
    } else {
      console.error('🚀 ~ auth-actions.js:52 ~ login ~ error:', error);
    }
  }
  redirect('/dashboard');
}

async function authAction(mode, prevState, formData) {
  if (mode === 'login') {
    return login(prevState, formData);
  }

  signup(prevState, formData);
}

async function logout(sessionId) {
  await deleteSession(null, sessionId, true);
}

export { authAction, logout };
