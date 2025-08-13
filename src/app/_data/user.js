import { verifySession } from 'lib/session';
import { supabase } from 'lib/supabase/supabase-client';
import { taintUniqueValue } from 'next/dist/server/app-render/rsc/taint';
import { cache } from 'react';

export const getUser = cache(async () => {
  // 1. Verify user's session
  const { userId, sessionId } = await verifySession();
  // 2. Fetch the user data
  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  const user = data[0];

  // 3. filter user data
  const filteredUser = userDTO({ ...user, sessionId });
  return filteredUser;
});

function userDTO(user) {
  // a data transfer object
  taintUniqueValue(
    'You cannot send sensitive data to the client!',
    user,
    user.password
  );

  return {
    createdAt: user.created_at,
    email: user.email,
    pfpUrl: user.pfp_url,
    favCoins: user.fav_coins,
    fullname: user.fullname,
    sessionId: user.sessionId,
  };
}
