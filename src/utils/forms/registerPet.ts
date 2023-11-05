import {ISchema, IRegisterPetForm} from '~/utils/interfaces';
import {useMask} from '~/utils';
import * as yup from 'yup';

const exec = (): ISchema<IRegisterPetForm<string>, IRegisterPetForm<any>> => {
  return yup.object().shape({
    image: yup.string(),
    name: yup
      .string()
      .required('Campo obrigatório')
      .min(4, 'Formato inválido.'),
    color: yup.string().required('Campo obrigatório'),
    birth: yup
      .string()
      .required('Campo obrigatório')
      .test('birthday-format', 'Tamanho minímo', function (birthday) {
        const birthdayCheck: string = String(birthday);
        return birthdayCheck.length == 8;
      })
      .test(
        'birthday-format',
        'O dia deve ser menor ou igual 31',
        function (birthday) {
          const birthdayCheck: string = useMask(String(birthday), '99/99/9999');
          const divideDate: string[] = birthdayCheck.split('/');
          return Number(divideDate[0]) <= 31;
        }
      )
      .test(
        'birthday-format',
        'O mês deve ser menor ou igual 12',
        function (birthday) {
          const birthdayCheck: string = useMask(String(birthday), '99/99/9999');
          const divideDate: string[] = birthdayCheck.split('/');
          return Number(divideDate[1]) <= 12;
        }
      ),
    about: yup.string().required('Campo obrigatório'),
  });
};

export const registerPetSchema = exec();
