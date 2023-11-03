export interface ILoginForm<T> {
  email: T;
  password: T;
}
export interface IResetPasswordForm<T> {
  email: T;
}

export interface IChangePasswordForm<T> {
  password: T;
  confirmedPassword: T;
}
export interface IRegisterForm<T> {
  name: T;
  document: T;
  email: T;
  phone: T;
  password: T;
  confirmedPassword: T;
  agreeTerms: boolean;
}
