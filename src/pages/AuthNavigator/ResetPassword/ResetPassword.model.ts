import {IResetPassword} from '~/pages/AuthNavigator/ResetPassword/ResetPassword.types';
import {resetPasswordSchema} from '~/utils/forms';
import {IResetPasswordForm} from '~/utils/interfaces';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

export const useResetPassword = (
  props: IResetPassword.IModelProps
): IResetPassword.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = (params: IResetPasswordForm<string>) => {
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
