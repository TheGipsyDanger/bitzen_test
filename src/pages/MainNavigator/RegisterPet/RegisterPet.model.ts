import {IRegisterPet} from '~/pages/MainNavigator/RegisterPet/RegisterPet.types';
import {useForm} from 'react-hook-form';
import {IRegisterPetForm} from '~/utils/interfaces';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerPetSchema} from '~/utils/forms';

export const useRegisterPet = (
  props: IRegisterPet.IModelProps
): IRegisterPet.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(registerPetSchema),
  });

  const onSubmit = (params: IRegisterPetForm<string>) => {};

  return {
    control,
    trigger,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
  };
};
