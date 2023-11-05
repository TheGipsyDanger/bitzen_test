import {withChildren, IWrappedSystem} from '~/utils';
export namespace IDistribution {
  export interface IView extends withChildren, IWrappedSystem {
    hasScroll?: boolean;
  }
  export interface IModelProps {}
  export interface IModel {}
}
