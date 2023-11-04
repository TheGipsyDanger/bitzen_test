import {ISchema, IRegisterPetForm} from '~/utils/interfaces';

import * as yup from 'yup';

const exec = (): ISchema<IRegisterPetForm<string>, IRegisterPetForm<any>> => {
  return yup.object().shape({
    image: yup.string().required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    color: yup.string().required('Campo obrigatório'),
    birth: yup.string().required('Campo obrigatório'),
    about: yup.string().required('Campo obrigatório'),
  });
};

export const registerPetSchema = exec();
