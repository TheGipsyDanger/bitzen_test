import {IUserData, IBaseResponse} from '~/utils';

export interface IPostLoginRequest extends IBaseResponse {
  data: IUserData;
}
