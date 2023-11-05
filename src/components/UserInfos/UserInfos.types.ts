import {IUser} from '~/utils';
export namespace IUserInfos {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    user: IUser;
    top: number;
  }
}
