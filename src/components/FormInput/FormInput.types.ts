import {TextInputProps} from 'react-native';
import {
  IFormErros,
  ITriggerFormInput,
  IFormInputNameAccepeted,
  ILoginForm,
  IFormErrosAccepeted,
} from '~/utils/interfaces';
import {IWrappedSystem} from '~/utils';

export namespace IFormInput {
  export interface IView
    extends TextInputProps,
      Omit<IWrappedSystem, 'textAlign' | 'children' | 'verticalAlign'> {
    errors: IFormErrosAccepeted;
    name: IFormInputNameAccepeted;
    trigger: ITriggerFormInput;
    onChange: (...event: any[]) => void;
  }
  export interface IModelProps {}
  export interface IModel {}
}
