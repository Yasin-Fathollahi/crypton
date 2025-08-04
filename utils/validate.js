export function validate(data) {
  const { email, password } = data;
  const errors = {
    email: [],
    password: [],
  };

  if (email.trim().length === 0 || !email.includes('@')) {
    errors.email.push('لطفا ایمیل خود را به درستی وارد کنید.');
  }

  if (password.trim().length === 0 || password.length < 6) {
    errors.password.push('رمز شما باید حداقل 6 کاراکتر داشته باشد.');
  }

  return errors;
}
