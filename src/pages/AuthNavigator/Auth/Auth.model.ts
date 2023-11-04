import {IAuth} from '~/pages/AuthNavigator/Auth/Auth.types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '~/utils/forms';
import {ILoginForm} from '~/utils/interfaces';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';
import {callPostLogin} from '~/data/factories';

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
    (async () => {
      await callPostLogin(params);
    })();
  };

  const goToResetPassword = () => {
    navigate(AppRoutes.ResetPassword);
  };

  const goToRegister = () => {
    navigate(AppRoutes.Register);
  };

  return {
    control,
    trigger,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    goToRegister,
    goToResetPassword,
  };
};
