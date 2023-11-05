import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IPostResendPasswordCodeRequest} from '~/data/models';

export interface IPostResendPasswordCode {
  send(
    params: IPostResendPasswordCode.Params
  ): Promise<IPostResendPasswordCode.Response>;
}

export namespace IPostResendPasswordCode {
  export type Params = {
    email: string;
  };

  export type Response = IBaseResponse & {
    data: IPostResendPasswordCodeRequest;
  };
}
