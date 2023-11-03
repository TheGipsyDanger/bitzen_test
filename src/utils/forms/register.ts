import {ISchema, IRegisterForm} from '~/utils/interfaces';

import * as yup from 'yup';

const exec = (): ISchema<IRegisterForm<string>, IRegisterForm<any>> => {
  return yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    document: yup.string().required('Campo obrigatório'),
    email: yup
      .string()
      .trim()
      .lowercase()
      .required('Campo obrigatório')
      .email('Formato inválido'),
    phone: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    confirmedPassword: yup.string().required('Campo obrigatório'),
    agreeTerms: yup
      .boolean()
      .required('Campo obrigatório')
      .oneOf([true], 'Campo obrigatório'),
  });
};

export const registerSchema = exec();
