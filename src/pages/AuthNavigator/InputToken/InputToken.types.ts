import {
  GestureResponderEvent,
  LayoutChangeEvent,
  TextInput,
} from 'react-native';
export namespace IInputToken {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    value: string;
    onSubmit: () => void;
    resendCode: () => void;
    ref: React.RefObject<TextInput>;
    isValid: boolean;
    isLoading: boolean;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    inputProps: {
      onPressOut: (event: GestureResponderEvent) => void;
    };
    getCellOnLayoutHandler: (
      index: number
    ) => (event: LayoutChangeEvent) => void;
  }
}
