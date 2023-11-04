import {ISchema, IChangePasswordForm} from '~/utils/interfaces';
import * as yup from 'yup';

const exec = (): ISchema<
  IChangePasswordForm<string>,
  IChangePasswordForm<any>
> => {
  return yup.object().shape({
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
  });
};

export const changePasswordSchema = exec();
