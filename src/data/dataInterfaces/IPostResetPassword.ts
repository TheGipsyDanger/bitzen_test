import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IPostResetPasswordRequest} from '~/data/models';

export interface IPostResetPassword {
  send(params: IPostResetPassword.Params): Promise<IPostResetPassword.Response>;
}

export namespace IPostResetPassword {
  export type Params = {
    token: string;
    email: string;
    passwod: string;
    password_confirmation: string;
  };

  export type Response = IBaseResponse & {
    data: IPostResetPasswordRequest;
  };
}
