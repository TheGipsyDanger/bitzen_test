import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  IResetPasswordForm,
} from '~/utils/interfaces';
export namespace IResetPassword {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    control: IControl<IResetPasswordForm<string>>;
    trigger: ITrigger<IResetPasswordForm<string>>;
    handleSubmit: IHandlerSubmit<IResetPasswordForm<string>>;
    errors: IFormErros<IResetPasswordForm<string>>;
    onSubmit: (data: IResetPasswordForm<string>) => void;
    isValid: boolean;
    isLoading: boolean;
  }
}
