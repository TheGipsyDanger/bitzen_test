import {AxiosHttpClient} from '~/utils/api';
import {PostResendPasswordCode} from '~/data/useCases';
import {IPostResendPasswordCode} from '~/data/dataInterfaces';

export const callResendPasswordCode = (
  params: IPostResendPasswordCode.Params
) => new PostResendPasswordCode(AxiosHttpClient).send(params);
