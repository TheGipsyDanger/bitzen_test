import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IPostValidateTokenRequest} from '~/data/models';

export interface IPostValidateToken {
  send(params: IPostValidateToken.Params): Promise<IPostValidateToken.Response>;
}

export namespace IPostValidateToken {
  export type Params = {
    token: string;
    email: string;
  };

  export type Response = IBaseResponse & {
    data: IPostValidateTokenRequest;
  };
}
