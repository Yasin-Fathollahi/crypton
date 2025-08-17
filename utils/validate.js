import { supabase } from 'lib/supabase/supabase-client';
const bcrypt = require('bcrypt');

export function validate(data) {
  const { email, password, fullname } = data;

  const errors = {
    fullname: [],
    email: [],
    password: [],
  };

  if (!email?.trim() || !email.includes('@')) {
    errors.email.push('لطفا ایمیل خود را به درستی وارد کنید.');
  }

  if (!password?.trim() || password.length < 6) {
    errors.password.push('رمز شما باید حداقل 6 کاراکتر داشته باشد.');
  }

  if (errors.email.length !== 0 || errors.password.length !== 0) {
    return { errors, data: null };
  }

  return {
    data: {
      ...(fullname ? { fullname: fullname.trim() } : {}),
      email,
      password,
    },
    errors: null,
  };
}

export async function verifyLoginCredentials(userData) {
  const { data: validatedData, errors } = validate(userData);

  if (!validatedData) {
    return { errors, data: validatedData };
  }

  const credentialErrors = { password: [] };

  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('email', validatedData.email)
    .limit(1);

  if (!data) {
    console.log('🚀 ~ validate.js:48 ~ verifyLoginCredentials ~ data:', data);
    credentialErrors.password.push(
      'لطفا اینترنت خود را بررسی و دوباره امتحان کنید.'
    );
    return { data: null, errors: credentialErrors };
  }

  const passwordIsValid = await bcrypt.compare(
    validatedData.password,
    data[0].password
  );

  if (!passwordIsValid || error) {
    console.error(
      '🚀 ~ validate.js:56 ~ verifyLoginCredentials ~ error:',
      error
    );

    credentialErrors.password.push('ایمیل یا رمز عبور نادرست است.');
    return { data: null, errors: credentialErrors };
  }

  const userId = data[0].user_id;

  return { data: userId, errors: null };
}
