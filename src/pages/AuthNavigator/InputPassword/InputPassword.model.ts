import {IInputPassword} from '~/pages/AuthNavigator/InputPassword/InputPassword.types';
import {changePasswordSchema} from '~/utils/forms';
import {useRoute} from '@react-navigation/native';
import {IChangePasswordForm} from '~/utils/interfaces';
import {IRoute} from '~/routes/routeConfig';
import {useAppDispatch, useAppSelector} from '~/utils';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {resetPasswordActions} from '~/redux/actions';

export const useInputPassword = (
  props: IInputPassword.IModelProps
): IInputPassword.IModel => {
  //@ts-ignore
  const {params: routeParams} = useRoute<IRoute>();

  const dispatch = useAppDispatch();

  const {isLoading} = useAppSelector(state => state.User);

  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = (params: IChangePasswordForm<string>) => {
    dispatch(
      resetPasswordActions.request({
        email: String(routeParams?.email),
        token: String(routeParams?.token),
        passwod: params.password,
        password_confirmation: params.confirmedPassword,
      })
    );
  };

  return {
    control,
    trigger,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    isLoading,
  };
};
