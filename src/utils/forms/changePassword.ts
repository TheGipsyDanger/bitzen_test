import {ISchema, IChangePasswordForm} from '~/utils/interfaces/formTypes';
import * as yup from 'yup';

const exec = (): ISchema<
  IChangePasswordForm<string>,
  IChangePasswordForm<any>
> => {
  return yup.object().shape({
    password: yup.string().required('Campo obrigatório'),
    confirmedPassword: yup.string().required('Campo obrigatório'),
  });
};

export const changePasswordSchema = exec();
