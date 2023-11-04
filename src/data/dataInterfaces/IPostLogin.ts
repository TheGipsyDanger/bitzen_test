import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IPostLoginRequest} from '~/data/models';

export interface IPostLogin {
  send(params: IPostLogin.Params): Promise<IPostLogin.Response>;
}

export namespace IPostLogin {
  export type Params = {
    email: string;
    password: string;
  };

  export type Response = IBaseResponse & {
    data: IPostLoginRequest;
  };
}
