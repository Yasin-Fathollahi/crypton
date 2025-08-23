'use server';

import { supabase } from './supabase/supabase-client';

export async function changeFullName(newName, email) {
  const { data, error } = await supabase
    .from('profiles')
    .update({ fullname: newName })
    .eq('email', email)
    .select('fullname');
  console.log(data[0]);
}
