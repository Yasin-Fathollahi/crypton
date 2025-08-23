import { getUser } from 'app/_data/user';

export default async function Favorites() {
  const { userData, error } = await getUser();
  if (error) {
    return error;
  }
  console.log(userData);
  return <></>;
}
