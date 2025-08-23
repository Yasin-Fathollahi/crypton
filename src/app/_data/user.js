import ErrorBox from '@/components/error';
import { verifySession } from 'lib/session';
import { supabase } from 'lib/supabase/supabase-client';
import { taintUniqueValue } from 'next/dist/server/app-render/rsc/taint';
import { cache } from 'react';

export const getUser = cache(async () => {
  // 1. Verify user's session
  const { userId, sessionId } = await verifySession();
  try {
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
    return {
      userData: filteredUser,
      error: null,
    };
  } catch (error) {
    console.error('🚀 ~ user.js:28 ~ error:', error);

    if (error.message === 'TypeError: fetch failed')
      return {
        userData: null,
        error: (
          <ErrorBox
            title="عدم اتصال به اینترنت"
            description="لطفا اتصال اینترنت خود را بررسی و دوباره تلاش کنید."
          />
        ),
      };
  }
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
