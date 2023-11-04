import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  ISearchForm,
} from '~/utils/interfaces';
export namespace IHome {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    control: IControl<ISearchForm<string>>;
    trigger: ITrigger<ISearchForm<string>>;
    handleSubmit: IHandlerSubmit<ISearchForm<string>>;
    errors: IFormErros<ISearchForm<string>>;
    onSubmit: (data: ISearchForm<string>) => void;
    isValid: boolean;
  }
}
