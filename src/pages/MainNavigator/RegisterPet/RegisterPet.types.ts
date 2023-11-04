import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  IRegisterPetForm,
} from '~/utils/interfaces';
export namespace IRegisterPet {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    control: IControl<IRegisterPetForm<string>>;
    trigger: ITrigger<IRegisterPetForm<string>>;
    handleSubmit: IHandlerSubmit<IRegisterPetForm<string>>;
    errors: IFormErros<IRegisterPetForm<string>>;
    onSubmit: (data: IRegisterPetForm<string>) => void;
    isValid: boolean;
  }
}
