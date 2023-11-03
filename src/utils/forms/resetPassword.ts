import {ISchema, IResetPasswordForm} from '~/utils/interfaces/formTypes';
import * as yup from 'yup';

const exec = (): ISchema<
  IResetPasswordForm<string>,
  IResetPasswordForm<any>
> => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .lowercase()
      .required('Campo obrigatório')
      .email('Formato inválido'),
  });
};

export const resetPasswordSchema = exec();
