import {withChildren, IWrappedSystem} from '~/utils';
export namespace IDistribution {
  export interface IView extends withChildren, IWrappedSystem {}
  export interface IModelProps {}
  export interface IModel {}
}
