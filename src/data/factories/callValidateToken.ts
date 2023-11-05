import {AxiosHttpClient} from '~/utils/api';
import {PostValidateToken} from '~/data/useCases';
import {IPostValidateToken} from '~/data/dataInterfaces';

export const callValidateToken = (params: IPostValidateToken.Params) =>
  new PostValidateToken(AxiosHttpClient).send(params);
