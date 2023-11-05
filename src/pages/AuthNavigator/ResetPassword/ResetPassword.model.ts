import {IResetPassword} from '~/pages/AuthNavigator/ResetPassword/ResetPassword.types';
import {resetPasswordSchema} from '~/utils/forms';
import {IResetPasswordForm} from '~/utils/interfaces';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAppDispatch, useAppSelector} from '~/utils';
import {resendCodeActions} from '~/redux/actions';

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

  const dispatch = useAppDispatch();

  const {isLoading} = useAppSelector(state => state.User);

  const onSubmit = (params: IResetPasswordForm<string>) => {
    dispatch(resendCodeActions.request(params));
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
