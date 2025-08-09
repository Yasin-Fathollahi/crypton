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

  return { errors: null, data: formattedData };
}
