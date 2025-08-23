import { getUser } from 'app/_data/user';
import Image from 'next/image';

export default async function Profile() {
  const { userData, error } = await getUser();

  return (
    <div>
      {/* <div><Image src={} fill/></div> */}

      <p>email {userData.email}</p>
    </div>
  );
}
