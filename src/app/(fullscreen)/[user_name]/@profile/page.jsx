import Image from 'next/image';
import { getCurrentUserData } from 'lib/supabase/supabase-user';
export default async function Profile() {
  const userData = await getCurrentUserData(['email', 'pfp_url']);
  console.log(userData);
  return <div>{/* <div><Image src={} fill/></div> */}</div>;
}
