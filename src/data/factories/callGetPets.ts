import {AxiosHttpClient} from '~/utils/api';
import {GetPets} from '~/data/useCases';
import {IGetPets} from '~/data/dataInterfaces';

export const callGetPets = (params: IGetPets.Params) =>
  new GetPets(AxiosHttpClient).send(params);
