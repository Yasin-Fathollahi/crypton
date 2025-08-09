import { redirect } from 'next/navigation';
import { supabase } from './supabase-client.js';
export async function getCurrentUserData(columns) {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) {
      throw authError;
      // throw new Error('Not authenticated');
    }

    const { data: profile, error: dbError } = await supabase
      .from('users')
      .select(...columns)
      .eq('user_id', user.id)
      .single();

    if (dbError) {
      throw new Error(dbError.message);
    }

    return profile;
  } catch (error) {
    console.error(error);
    if (error.message === 'Not authenticated') {
      redirect('/auth?mode?login');
    }
  }
}

export async function updatePfp(file, userId) {
  const fileExt = file.name.split('.').pop();
  const filePath = `${userId}/pfp.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { upsert: true });

  if (uploadError) throw new Error(uploadError.message);

  const { data: publicUrlData } = supabase.storage
    .from('avatars')
    .getPublicUrl(filePath);

  const { error: dbError } = await supabase
    .from('users')
    .update({ pfp_url: publicUrlData.publicUrl })
    .eq('id', userId);

  if (dbError) throw new Error(dbError.message);

  return publicUrlData.publicUrl;
}

export async function updateUsername(newUsername, userId) {
  const { data: existing, error: checkError } = await supabase
    .from('users')
    .select('id')
    .eq('username', newUsername)
    .neq('id', userId)
    .single();

  if (checkError && checkError.code !== 'PGRST116') {
    throw new Error('Error checking username: ' + checkError.message);
  }

  if (existing) throw new Error('Username already taken.');

  const { error: updateError } = await supabase
    .from('users')
    .update({ username: newUsername })
    .eq('id', userId);

  if (updateError) throw new Error(updateError.message);

  return true;
}

export async function toggleFavoriteCoin(coinId, userId) {
  const { data: user, error } = await supabase
    .from('users')
    .select('fav_coins')
    .eq('id', userId)
    .single();

  if (error) throw new Error(error.message);

  let updatedCoins = user.fav_coins || [];

  if (updatedCoins.includes(coinId)) {
    updatedCoins = updatedCoins.filter((id) => id !== coinId);
  } else {
    updatedCoins.push(coinId);
  }

  const { error: updateError } = await supabase
    .from('users')
    .update({ fav_coins: updatedCoins })
    .eq('id', userId);

  if (updateError) throw new Error(updateError.message);

  return updatedCoins;
}

/*
await toggleFavoriteCoin('btc', user.id)
await updateUsername('yasin_dev', user.id)
await updatePfp(fileInput.files[0], user.id)
*/
