import {
  Control,
  FieldErrors,
  UseFormTrigger,
  UseFormHandleSubmit,
  FieldValues,
} from 'react-hook-form';
import {
  ILoginForm,
  IChangePasswordForm,
  IRegisterForm,
  IResetPasswordForm,
} from './formSchemaTypes';
import * as yup from 'yup';

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

export type IFormErrosAccepeted = IFormErros<ILoginForm<string>> &
  IFormErros<IChangePasswordForm<string>> &
  IFormErros<IRegisterForm<string>> &
  IFormErros<IResetPasswordForm<string>>;

export type ITriggerFormInput =
  | ITrigger<ILoginForm<string>>
  | ITrigger<IChangePasswordForm<string>>
  | ITrigger<IRegisterForm<string>>
  | ITrigger<IResetPasswordForm<string>>;
