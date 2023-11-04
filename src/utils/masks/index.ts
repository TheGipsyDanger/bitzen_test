import {ILoginForm} from '~/utils/interfaces';
import {mask as masker} from 'remask';

export type IMasks = keyof ILoginForm<string>;

export type IMaskObj = {
  [key in IMasks]: string;
};

export const defineMask = (mask: IMasks) => {
  const options: IMaskObj = {
    email: '',
    password: '',
  };
  return options[mask] || '';
};

export const useMask = (value: string, mask: string) => {
  return mask !== '' ? masker(value, mask) : value;
};
