import {IUser} from '~/utils';

export namespace IMyInfos {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    user: IUser;
  }
}
