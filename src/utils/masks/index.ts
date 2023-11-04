import {
  ILoginForm,
  IChangePasswordForm,
  IRegisterPetForm,
  IRegisterForm,
  ISearchForm,
  IResetPasswordForm,
} from '~/utils/interfaces/formSchemaTypes';
import {mask as masker} from 'remask';

export type IMasks =
  | keyof ILoginForm<string>
  | keyof IChangePasswordForm<string>
  | keyof IRegisterForm<string, boolean>
  | keyof IRegisterPetForm<string>
  | keyof ISearchForm<string>
  | keyof IResetPasswordForm<string>;

export type IMaskObj = {
  [key in IMasks]: string | string[];
};

export const defineMask = (mask: IMasks) => {
  const options: IMaskObj = {
    email: '',
    password: '',
    confirmedPassword: '',
    phone: ['(99) 9999-9999', '(99) 99999-9999'],
    image: '',
    name: '',
    color: '',
    birth: '99/99/9999',
    about: '',
    query: '',
    agreeTerms: '',
    document: '999.999.999-99',
  };
  return options[mask] || '';
};

export const useMask = (value: string, mask: string) => {
  return mask !== '' ? masker(value, mask) : value;
};
