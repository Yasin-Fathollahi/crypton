import { getCurrentUserData } from 'lib/supabase/supabase-user';
export default async function Favorites() {
  const userCoins = await getCurrentUserData(['fav_coins']);
  console.log(userCoins);
  return <></>;
}
