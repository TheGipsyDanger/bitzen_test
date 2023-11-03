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
    control: IControl<IRegisterForm<string>>;
    trigger: ITrigger<IRegisterForm<string>>;
    handleSubmit: IHandlerSubmit<IRegisterForm<string>>;
    errors: IFormErros<IRegisterForm<string>>;
    onSubmit: (data: IRegisterForm<string>) => void;
    isValid: boolean;
  }
  export interface IRegisterFormView {
    control: IControl<IRegisterForm<string>>;
    trigger: ITrigger<IRegisterForm<string>>;
    errors: IFormErros<IRegisterForm<string>>;
  }
  export interface ITermFormView {
    control: IControl<IRegisterForm<string>>;
    trigger: ITrigger<IRegisterForm<string>>;
    errors: IFormErros<IRegisterForm<string>>;
  }
}
