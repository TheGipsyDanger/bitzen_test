import {IRegisterPet} from '~/pages/MainNavigator/RegisterPet/RegisterPet.types';
import {useForm} from 'react-hook-form';
import {IRegisterPetForm} from '~/utils/interfaces';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerPetSchema} from '~/utils/forms';
import {useAppDispatch, useAppSelector, useMask} from '~/utils';
import {createPetActions} from '~/redux/actions';

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

  const dispatch = useAppDispatch();

  const {token} = useAppSelector(state => state.User);

  const onSubmit = (params: IRegisterPetForm<string>) => {
    const dataOriginal = useMask(params.birth, '99/99/9999');
    const datesSplit = dataOriginal.split('/');
    const covertData =
      datesSplit[2] + '-' + datesSplit[1] + '-' + datesSplit[0];
    console.log('Submit => ', {...params, birth: covertData, token});
    dispatch(createPetActions.request({...params, birth: covertData, token}));
  };

  return {
    control,
    trigger,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
  };
};
