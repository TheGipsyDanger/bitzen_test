import {useState} from 'react';
import {IInputToken} from '~/pages/AuthNavigator/InputToken/InputToken.types';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export const useInputToken = (
  props: IInputToken.IModelProps
): IInputToken.IModel => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [inputProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return {
    ref,
    value,
    setValue,
    inputProps,
    getCellOnLayoutHandler,
  };
};
