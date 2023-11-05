import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  IChangePasswordForm,
} from '~/utils/interfaces';
export namespace IInputPassword {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    control: IControl<IChangePasswordForm<string>>;
    trigger: ITrigger<IChangePasswordForm<string>>;
    handleSubmit: IHandlerSubmit<IChangePasswordForm<string>>;
    errors: IFormErros<IChangePasswordForm<string>>;
    onSubmit: (data: IChangePasswordForm<string>) => void;
    isLoading: boolean;
    isValid: boolean;
  }
}
