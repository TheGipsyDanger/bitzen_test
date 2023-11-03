import {
  Control,
  FieldErrors,
  UseFormTrigger,
  UseFormHandleSubmit,
  FieldValues,
} from 'react-hook-form';
import * as yup from 'yup';

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
}

export type IControl<T extends FieldValues> = Control<T, any>;
export type ITrigger<T extends FieldValues> = UseFormTrigger<T>;
export type IFormErros<T extends FieldValues> = FieldErrors<T>;
export type IHandlerSubmit<T extends FieldValues> = UseFormHandleSubmit<
  T,
  undefined
>;

export type ISchema<
  T1 extends yup.Maybe<yup.AnyObject>,
  T2 extends yup.Maybe<yup.AnyObject>
> = yup.ObjectSchema<T1, yup.AnyObject, T2, ''>;

export type IFormInputNameAccepeted =
  | keyof ILoginForm<string>
  | keyof IChangePasswordForm<string>
  | keyof IRegisterForm<string>
  | keyof IResetPasswordForm<string>;

export type ITriggerFormInput =
  | ITrigger<ILoginForm<string>>
  | ITrigger<IChangePasswordForm<string>>
  | ITrigger<IRegisterForm<string>>
  | ITrigger<IResetPasswordForm<string>>;
