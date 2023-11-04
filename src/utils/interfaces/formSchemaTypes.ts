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
export interface IRegisterForm<T, R> {
  name: T;
  document: T;
  email: T;
  phone: T;
  password: T;
  confirmedPassword: T;
  agreeTerms: R;
}

export interface IRegisterPetForm<T> {
  image: T;
  name: T;
  color: T;
  birth: T;
  about: T;
}

export interface ISearchForm<T> {
  query: T;
}
