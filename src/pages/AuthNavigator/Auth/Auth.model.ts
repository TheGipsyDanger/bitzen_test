import {IAuth} from '~/pages/AuthNavigator/Auth/Auth.types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '~/utils/forms';
import {ILoginForm} from '~/utils/interfaces';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';
import {useAppDispatch, useAppSelector} from '~/utils';
import {loginActions} from '~/redux/actions';

export const useAuth = (): IAuth.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.User);

  const onSubmit = (params: ILoginForm<string>) => {
    dispatch(loginActions.request(params));
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
    onSubmit,
    errors,
    isValid,
    isLoading,
    goToRegister,
    handleSubmit,
    goToResetPassword,
  };
};
