import {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {IRoute} from '~/routes/routeConfig';
import {IInputToken} from '~/pages/AuthNavigator/InputToken/InputToken.types';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useAppDispatch, useAppSelector} from '~/utils';
import {resendCodeActions, validateCodeActions} from '~/redux/actions';

export const useInputToken = (
  props: IInputToken.IModelProps
): IInputToken.IModel => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [inputProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //@ts-ignore
  const {params} = useRoute<IRoute>();

  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(
      validateCodeActions.request({email: String(params?.email), token: value})
    );
  };

  const resendCode = () => {
    dispatch(resendCodeActions.request({email: String(params?.email)}));
  };

  const {isLoading} = useAppSelector(state => state.User);

  const isValid = value.length === 4;

  return {
    ref,
    value,
    isValid,
    setValue,
    onSubmit,
    resendCode,
    inputProps,
    isLoading,
    getCellOnLayoutHandler,
  };
};
