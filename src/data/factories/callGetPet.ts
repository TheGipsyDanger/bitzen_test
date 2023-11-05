import {AxiosHttpClient} from '~/utils/api';
import {GetPet} from '~/data/useCases';
import {IGetPet} from '~/data/dataInterfaces';

export const callGetPet = (params: IGetPet.Params) =>
  new GetPet(AxiosHttpClient).send(params);
