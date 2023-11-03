import {IWrappedSystem} from '~/utils';

export namespace IPage {
  export interface IView extends Omit<IWrappedSystem, 'onPress'> {
    hasScroll?: boolean;
    showScroll?: boolean;
  }
  export interface IModelProps {}
  export interface IModel {
    top: number;
  }
}
