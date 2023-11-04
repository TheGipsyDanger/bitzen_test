import {AxiosHttpClient} from '~/utils/api';
import {PostLogin} from '~/data/useCases';
import {IPostLogin} from '~/data/dataInterfaces';

export const callPostLogin = (params: IPostLogin.Params) =>
  new PostLogin(AxiosHttpClient).send(params);
