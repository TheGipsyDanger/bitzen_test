import {AxiosHttpClient} from '~/utils/api';
import {PostResetPassword} from '~/data/useCases';
import {IPostResetPassword} from '~/data/dataInterfaces';

export const callResetPassword = (params: IPostResetPassword.Params) =>
  new PostResetPassword(AxiosHttpClient).send(params);
