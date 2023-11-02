import {IWrappedSystem} from '~/utils';

type IButtonVariants = 'primary' | 'link';

export namespace IButton {
  export interface IView extends IWrappedSystem {
    isLoading?: boolean;
    label: string;
    variant: IButtonVariants;
  }
  export interface IModelProps {}
  export interface IModel {}
}
