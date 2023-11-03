import {useState} from 'react';
import {IInputToken} from '~/pages/AuthNavigator/InputToken/InputToken.types';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {navigate} from '~/utils/navigator';
import {AppRoutes} from '~/routes/routeConfig';

export const useInputToken = (
  props: IInputToken.IModelProps
): IInputToken.IModel => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [inputProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onSubmit = () => {
    navigate(AppRoutes.ResetPasswordConfirmation);
  };

  const resendCode = () => {};

  return {
    ref,
    value,
    setValue,
    onSubmit,
    resendCode,
    inputProps,
    getCellOnLayoutHandler,
  };
};
