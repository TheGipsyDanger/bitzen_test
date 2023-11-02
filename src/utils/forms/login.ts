import {ISchema, ILoginForm} from '~/utils/interfaces/formTypes';
import * as yup from 'yup';

const exec = (): ISchema<ILoginForm<string>, ILoginForm<any>> => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .lowercase()
      .required('Campo obrigatório')
      .email('Formato inválido'),
    password: yup.string().required('Campo obrigatório'),
  });
};

export const loginSchema = exec();
