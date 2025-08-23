import { getUser } from 'app/_data/user';
import Image from 'next/image';
import ImagePicker from './_components/image-picker';
import EditableField from './_components/editable-field';
import { PersianDateTime } from '../../../../../utils/formatters';
import RegularField from './_components/regular-field';
import { changeFullName } from 'lib/user-actions';

export default async function Profile() {
  const { userData, error } = await getUser();
  // { createdAt, email, fullname, pfpUrl }

  if (error) {
    return error;
  }

  return (
    <>
      <article className="w-1/4 h-1/2 mx-auto  rounded-lg mt-24 flex flex-col gap-8 items-center">
        <figure className="w-32 h-32">
          <ImagePicker src={userData.pfpUrl} email={userData.email} />
        </figure>
        <ul className="flex flex-col gap-2 text-lg">
          <EditableField
            title="نام و نام خانوادگی"
            content={userData.fullname}
            email={userData.email}
            updateFn={changeFullName}
          />
          <RegularField title="ایمیل" content={userData.email} />
          <RegularField
            title="زمان ساخت حساب"
            content={PersianDateTime(new Date(userData.createdAt))}
          />
        </ul>
      </article>
    </>
  );
}
