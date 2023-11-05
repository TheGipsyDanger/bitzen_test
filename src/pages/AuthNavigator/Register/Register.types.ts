import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  IRegisterForm,
} from '~/utils/interfaces';
export namespace IRegister {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    notNow: () => void;
    control: IControl<IRegisterForm<string, boolean>>;
    trigger: ITrigger<IRegisterForm<string, boolean>>;
    handleSubmit: IHandlerSubmit<IRegisterForm<string, boolean>>;
    errors: IFormErros<IRegisterForm<string, boolean>>;
    onSubmit: (data: IRegisterForm<string, boolean>) => void;
    isValid: boolean;
    goToLogin: () => void;
  }
  export interface IRegisterFormView {
    control: IControl<IRegisterForm<string, boolean>>;
    trigger: ITrigger<IRegisterForm<string, boolean>>;
    errors: IFormErros<IRegisterForm<string, boolean>>;
  }
  export interface ITermFormView {
    control: IControl<IRegisterForm<string, boolean>>;
    trigger: ITrigger<IRegisterForm<string, boolean>>;
    errors: IFormErros<IRegisterForm<string, boolean>>;
  }
}
