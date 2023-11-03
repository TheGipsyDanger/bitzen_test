import {IInputPassword} from '~/pages/AuthNavigator/InputPassword/InputPassword.types';
import {changePasswordSchema} from '~/utils/forms';
import {IChangePasswordForm} from '~/utils/interfaces';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

export const useInputPassword = (
  props: IInputPassword.IModelProps
): IInputPassword.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = (params: IChangePasswordForm<string>) => {
    navigate(AppRoutes.MainNavigator);
  };

  return {
    control,
    trigger,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
  };
};
