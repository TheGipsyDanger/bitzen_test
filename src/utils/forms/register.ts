import {ISchema, IRegisterForm} from '~/utils/interfaces';

import * as yup from 'yup';

const exec = (): ISchema<
  IRegisterForm<string, boolean>,
  IRegisterForm<any, any>
> => {
  return yup.object().shape({
    name: yup
      .string()
      .required('Campo obrigatório')
      .min(4, 'Formato inválido.'),
    document: yup
      .string()
      .required('Campo obrigatório')
      .min(11, 'Formato inválido.'),
    email: yup
      .string()
      .trim()
      .lowercase()
      .required('Campo obrigatório')
      .email('Formato inválido'),
    phone: yup
      .string()
      .required('Campo obrigatório')
      .min(10, 'Formato inválido.'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(6, 'Senha muito curta.'),
    confirmedPassword: yup
      .string()
      .required('Campo obrigatório')
      .min(6, 'Senha muito curta.')
      .test('pw-match', 'Senhas devem ser iguais', function (value) {
        return this.parent.password === value;
      }),
    agreeTerms: yup
      .boolean()
      .default(false)
      .required('Campo obrigatório')
      .oneOf([false], 'Campo obrigatório'),
  });
};

export const registerSchema = exec();
