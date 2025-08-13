import { supabase } from 'lib/supabase/supabase-client';
const bcrypt = require('bcrypt');
export function validate(data) {
  const { email, password, fullname = undefined } = data;
  const errors = {
    fullname: [],
    email: [],
    password: [],
  };

  const formattedData = {
    email: email.trim(),
    password: password.trim(),
  };

  if (fullname) {
    formattedData.fullname = fullname.trim();
  }

  if (formattedData.email.length === 0 || !email.includes('@')) {
    errors.email.push('لطفا ایمیل خود را به درستی وارد کنید.');
  }

  if (formattedData.email.length === 0 || !email.includes('@')) {
    errors.email.push('لطفا ایمیل خود را به درستی وارد کنید.');
  }

  if (formattedData.password.length === 0 || password.length < 6) {
    errors.password.push('رمز شما باید حداقل 6 کاراکتر داشته باشد.');
  }

  if (errors.email.length !== 0 || errors.password.length !== 0) {
    return { errors, data: null };
  }

  return { data: formattedData };
}

export async function verifyLoginCredentials(userData) {
  const { data: validatedData, errors } = validate(userData);

  if (!validatedData) {
    return errors;
  }

  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('email', validatedData.email);

  const passwordIsValid = await bcrypt.compare(
    validatedData.password,
    data[0].password
  );

  if (!passwordIsValid || error) {
    console.error(
      '🚀 ~ validate.js:56 ~ verifyLoginCredentials ~ error:',
      error
    );

    errors.password.push('ایمیل یا رمز عبور نادرست است.');
    return { userId: null, errors };
  }

  const userId = data[0].user_id;

  return { userId };
}
