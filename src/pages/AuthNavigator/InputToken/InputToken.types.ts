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
    ref: React.RefObject<TextInput>;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    inputProps: {
      onPressOut: (event: GestureResponderEvent) => void;
    };
    getCellOnLayoutHandler: (
      index: number
    ) => (event: LayoutChangeEvent) => void;
  }
}
