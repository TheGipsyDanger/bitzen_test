import {IAuth} from '~/pages/AuthNavigator/Auth/Auth.types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '~/utils/forms';
import {ILoginForm} from '~/utils/interfaces';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';

export const useAuth = (): IAuth.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (params: ILoginForm<string>) => {
    navigate(AppRoutes.MainNavigator);
  };

  const goToResetPassword = () => {
    navigate(AppRoutes.ResetPassword);
  };

  return {
    control,
    trigger,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    goToResetPassword,
  };
};
