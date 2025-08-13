import { getUser } from 'app/_data/user';

export default async function Favorites() {
  const userCoins = await getUser();
  console.log(userCoins);
  return <></>;
}
