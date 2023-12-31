import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  ILoginForm,
} from '~/utils/interfaces';
export namespace IAuth {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    control: IControl<ILoginForm<string>>;
    trigger: ITrigger<ILoginForm<string>>;
    handleSubmit: IHandlerSubmit<ILoginForm<string>>;
    errors: IFormErros<ILoginForm<string>>;
    onSubmit: (data: ILoginForm<string>) => void;
    isValid: boolean;
    isLoading: boolean;
    goToResetPassword: () => void;
    goToRegister: () => void;
  }
}
