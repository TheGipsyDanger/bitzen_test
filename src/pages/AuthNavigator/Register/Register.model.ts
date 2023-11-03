import {IRegister} from '~/pages/AuthNavigator/Register/Register.types';
import {useForm} from 'react-hook-form';
import {registerSchema} from '~/utils/forms';
import {IRegisterForm} from '~/utils/interfaces';
import {yupResolver} from '@hookform/resolvers/yup';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';

export const useRegister = (props: IRegister.IModelProps): IRegister.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (params: IRegisterForm<string>) => {
    navigate(AppRoutes.MainNavigator);
  };

  const goToLogin = () => navigate(AppRoutes.Auth);

  return {
    control,
    trigger,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    goToLogin,
  };
};
