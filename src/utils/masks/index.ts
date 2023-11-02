import {ILoginForm} from '~/utils/interfaces';

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
