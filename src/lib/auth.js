import { supabase } from './supabase/supabase.js';

export async function authenticateWithEmail({ email, password }, authType) {
  const { data, error } =
    authType === 'signup'
      ? await supabase.auth.signUp({
          email,
          password,
        })
      : await supabase.auth.signInWithPassword({
          email,
          password,
        });

  if (error) throw new Error(error.message);

  return data.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
